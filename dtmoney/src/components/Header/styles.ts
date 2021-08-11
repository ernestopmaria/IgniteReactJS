import styled from 'styled-components'


export  const Container = styled.header`
background: var(--blue);


`
export  const Content = styled.div`
max-width: 1120px;
margin: 0 auto;
padding: 2rem 1rem 12rem;
display: flex;
align-items: center;
justify-content: space-between;

button{    
    background: var(--blue-light);
    border: 0;
    color:var(--shape);
    font-size: 1rem;
    padding: 0 2rem;
    height: 3rem;
    border-radius:0.25rem;
    box-shadow: 5px 5px 2px #aaaaaa;
    :hover{
        filter: brightness(0.9);
        transition: filter 0.2s;
    }
    
    
}

`