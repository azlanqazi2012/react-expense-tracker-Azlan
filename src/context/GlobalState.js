// const { createContext, useReducer } = require("react");

import React,{createContext,useReducer} from 'react';
//Import The Reducer
import AppReducer from './AppReducer';

//create thye initial STATE
const initialState={
    transactions:[
        {id:1,description:"Income 1",transaction:1000},
        {id:2,description:"Expense 1",transaction:-100},
        {id:3,description:"Income 2",transaction:2000},
        {id:4,description:"Expense 2",transaction:-500}
     
    ]


}

export const GlobalContext=createContext(initialState);

// create a provider for the global context

export const GlobalProvider=({children})=>{
    const [state]= useReducer(AppReducer,initialState)
    return (
        <GlobalContext.Provider value={
            {
            transactions:state.transactions
            }
        }
        >
            {children}
        </GlobalContext.Provider>
        )
    }