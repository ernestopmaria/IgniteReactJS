import styled from "styled-components";

export const Container = styled.div`
max-width:1120px;


header{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    color: var(--text-body);
    margin-top: 2rem;
}
body{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background:var(--shape);
    gap: 2rem;
    margin-top: .8rem;
    padding: .7rem;
    border-radius: 0.25rem;
    box-shadow: 4px 4px 5px #aaaaaa;
    p{
        color:var(--text-title);
        
    }

}


`;