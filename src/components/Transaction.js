import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import TransactionComp from '../components/TransactionComp';


function Transactions() {
    const {transactions} = useContext(GlobalContext);


    return(
        <div>
            <h3> History</h3>
            <ul className="list">
                {transactions.map(transaction =>(<TransactionComp key={transaction.id} transaction={transaction} />))}
                
            </ul>
        </div>
    )
    
}

export default Transactions;