import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>
                <ul className="list">
                    <li className="plus">
Project 1 income
<span>$0.00</span>
<button className="delete-btn">
    X
</button>
                    </li>
                    <li className="minus">
                    Project 1 expense
<span>$0.00</span>   
<button className="delete-btn">
    X
</button>
                    </li>

                </ul>
            </h3>
        </div>
    )
}
