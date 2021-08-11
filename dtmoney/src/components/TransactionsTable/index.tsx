import { Container } from "./styles";




export function TransactionsTable(){
    return(
        <Container>
            <header>
                <p>Título</p>
                <p>Preço</p>
                <p>Categoria</p>
                <p>Data</p>
                
            </header>
            <body>
                <p>Agua</p>
                <p>100</p>
                <p>Desporto</p>
                <p>07/05/2021</p>
            </body>
            <body>
                <p>Agua</p>
                <p>1087</p>
                <p>Laser</p>
                <p>07/05/2021</p>
            </body>
            <body>
                <p>Agua</p>
                <p>178</p>
                <p>Educação</p>
                <p>07/05/2021</p>
            </body>
            <body>
                <p>Agua</p>
                <p>100.5</p>
                <p>Saúde</p>
                <p>07/05/2021</p>
            </body>
        </Container>

    )

}