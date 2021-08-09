

export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.repositorie.name}</strong>
        <p>{props.repositorie.description}</p>
        <a href={props.repositorie.html_url}>Acessar repositorios</a>
    </li>
    )
}