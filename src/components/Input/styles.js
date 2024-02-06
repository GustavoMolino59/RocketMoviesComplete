import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;

    margin-bottom:.8rem;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.colors.background_input};
    padding: 1.5rem 2.4rem 2rem;
    > input{
        background-color: transparent;
        border:none;
        color: ${({theme}) => theme.colors.grey_placeholder};
        margin-left:1.6rem;
    }

`