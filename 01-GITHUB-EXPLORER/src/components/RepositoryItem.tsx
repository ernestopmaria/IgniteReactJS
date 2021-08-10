

interface RepositoryItemProps{
    repositorie:
    {
    name:string,
    description:string,
    html_url:string
}

}

export function RepositoryItem(props:RepositoryItemProps){
    return(
        <li>
        <strong>{props.repositorie.name}</strong>
        <p>{props.repositorie.description}</p>
        <a href={props.repositorie.html_url}>Acessar repositorios</a>
    </li>
    )
}