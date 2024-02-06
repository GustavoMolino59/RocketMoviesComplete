import styled from "styled-components";

export const Container = styled.textarea`
    width:100%;
    height: 27.4rem;

    background-color: ${({theme}) => theme.colors.background_input};
    color: ${({theme}) => theme.colors.white};

    border:none;
    resize:none;

    margin-bottom:8px;
    border-radius:10px;
    padding: 16px;

    &::placeholder {
        color: ${({theme}) => theme.colors.grey_placeholder};
    }
`