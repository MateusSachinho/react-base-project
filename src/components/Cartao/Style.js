import styled from "styled-components";

const Container = styled.div`
    width: 10em;
    height: min-content;
    border: 1px solid var(--secundaria);
    border-radius: 5px;
    background-color: var(--background);
`;

const Titulo = styled.h3`
    text-decoration: underline;
    padding: 10px;
`;

const Texto = styled.p`
    padding: 0 .5em;
`

export {Container, Titulo, Texto};