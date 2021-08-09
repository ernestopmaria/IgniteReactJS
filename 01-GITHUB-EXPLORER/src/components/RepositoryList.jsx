import React, { useEffect, useState } from "react"

import {RepositoryItem} from './RepositoryItem.jsx'
import '../styles/repositories.scss'




export function RepositoryList(){
    const [repositories , setRepository] = useState([])

useEffect(()=>{
    fetch("https://api.github.com/orgs/rocketseat/repos")
    .then(response=>response.json())
    .then(data=>setRepository(data))
}, [])

console.log(repositories)

    return(
        <section className="repository-list">
        <h1>Repositorios</h1><hr />
        <ul>
            {
                repositories.map(
                    repository =>{
                        return(
                            <RepositoryItem key ={repository.id} repositorie={repository}/>
                        )
                    }
                )
            }
        
        </ul>
        </section>
        
    )
}