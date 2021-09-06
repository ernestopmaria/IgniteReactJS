import { useEffect } from "react";
import { Container } from "./styles";




export function TransactionsTable(){
    useEffect(()=>{
        fetch('http://localhost:3000/api/transations')
        .then(response =>response.json())
        .then(data => console.log(data))
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