import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.button`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: ${({theme}) => theme.colors.pink_base};
    border: none;
    border-radius: 1rem;

    padding: 1.6rem;

    font-size: 1.6rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.background_tag};
`