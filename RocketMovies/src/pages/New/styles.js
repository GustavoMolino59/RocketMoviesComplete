import styled from "styled-components";

export const Container = styled.div``

export const Main = styled.div`
    margin: 4rem 12.3rem 8.5rem;
    height:70vh;
    > h1{
        margin-bottom: 4rem;
    }
    overflow-y:auto;
    &::-webkit-scrollbar {
        width: .8rem;
        height:.6rem;
        border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 8px;
        background: transparent;

    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.pink_base}; 
        border-radius: 8px;
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    gap:4rem;
`

export const Dados = styled.div`
    display:flex;
    gap:4rem;
`

export const Marcadores = styled.div`
    background-color: ${({theme}) => theme.colors.background_black};
    width:100%;
    height:8.8rem; 
    display:flex;
    gap: 2.4rem;
    align-items:center;
    justify-content:flex-start;
    padding:1.6rem;
    border-radius:.8rem;
`

export const Buttons = styled.div`
    display:flex;
    gap:4rem;
    justify-content: space-between;
    width:100%;
    > div{
        width:100%;
    }
    & > div:nth-child(1) > :first-child > :first-child{
        background-color:${({theme}) => theme.colors.background_black};
        color: ${({theme}) => theme.colors.pink_base};
    }
`