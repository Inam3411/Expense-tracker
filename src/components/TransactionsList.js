import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
import { Transaction } from './Transaction'
// import { Transaction } from './components/Transaction';

export const TransactionsList = () => {
    const {transactions} = useContext(GlobalContext)
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction=>(
                    <Transaction key={transaction.id} transaction = {transaction}/>
                ))}
                
            </ul>
        </div>
    );
}
