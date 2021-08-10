import styled from 'styled-components'


export  const Container = styled.header`
background: var(--blue);
height: 13.25rem;

`
export  const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

padding: 3rem;

button{
    
    background: var(--blue-light);
    outline: 0;
   width: 10rem;
    border: none;
    color:var(--shape);
    font-size:1rem;
    padding: .8rem;
    border-radius:5px;
    :hover{
        opacity: 0.7;
        transition:.1s
    }
    
    
}
img{
    width: 10rem;  
}

`