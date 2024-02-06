import styled from "styled-components";
import backgroundImg from '../../assets/background.png'
import { ButtonText } from "../../components/ButtonText";
export const Container = styled.div`
    height:100vh;
    display:flex;
    align-items: stretch;
    gap: 15.9rem;
    padding-left:13.4rem;
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    margin:auto auto;
    > h1{
        color: ${({theme}) => theme.colors.pink_base};
        font-size:4.8rem;
        font-weight:bold;
    }
    >p {
        color: ${({theme}) => theme.colors.grey_text_1};
        font-size: 1.4rem;
    }   
    > h2{
        color: ${({theme}) => theme.colors.white};
        font-size:2.4rem;
        margin-top:4.8rem;
        margin-bottom:4.8rem;
    }
    > a {
        margin-top: 4.2rem;
        align-items:center;
        justify-content:center;
        text-align:center;
    }
`

export const Background = styled.div`
    flex:1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size:cover;
`