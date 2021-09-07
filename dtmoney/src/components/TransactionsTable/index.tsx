import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";




export function TransactionsTable(){

    useEffect(()=>{
        api.get('http://localhost:3000/api/transations')        
        .then(response => console.log(response.data))
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
                <tbody>
                    <tr>
                        <td >Chuteiras</td>
                        <td className="deposit">100</td>
                        <td>Desporto</td>
                        <td>07/05/2015</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">100</td>
                        <td>Casa</td>
                        <td>07/05/2015</td>
                    </tr>
                    <tr>
                        <td >Chuteiras</td>
                        <td className="withdraw">100</td>
                        <td>Desporto</td>
                        <td>07/05/2015</td>
                    </tr>

                </tbody>
                
            </table>
           
         
        </Container>

    )

}