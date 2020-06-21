import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <li className="minus">
            {transaction.description}
            <span>{transaction.transaction}</span>   
            <button className="delete-btn">X</button>
        </li>
    )
}
