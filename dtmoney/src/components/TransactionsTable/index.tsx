import { transitions } from "polished";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionProps{
    id:number,
    title:string,
    amount:number,
    type:string
    category:string,
    createdAt:string,

}


export function TransactionsTable(){

    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(()=>{
        api.get('http://localhost:3000/api/transations')        
        .then(response => (setTransactions(response.data.transactions)))
    },[])


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                    <th>Titulo</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    </tr>
                </thead>
                
                <tbody >
                {transactions.map(transaction=>{
                    return(                    
                    <tr  key={transaction.id}>
                        <td >{transaction.title}</td>
                        <td className={transaction.type}>{transaction.amount}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>)} )}
                </tbody>
               
                
            </table>
           
         
        </Container>

    )

}