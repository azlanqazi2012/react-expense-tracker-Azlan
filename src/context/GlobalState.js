// const { createContext, useReducer } = require("react");

import React,{createContext,useReducer} from 'react';
//Import The Reducer
import AppReducer from './AppReducer';

//create thye initial STATE
const initialState={
    transactions:[
    ]


}

export const GlobalContext=createContext(initialState);

// create a provider for the global context

export const GlobalProvider=({children})=>{
    const [state,dispatch]= useReducer(AppReducer,initialState)
    //Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
    return (
        <GlobalContext.Provider value={
            {
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
            }
        }
        >
            {children}
        </GlobalContext.Provider>
        )
    }