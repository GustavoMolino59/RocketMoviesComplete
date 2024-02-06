import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.colors.background_input};
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.colors.grey_placeholder}` : "none"};
    padding-right:1.6rem;
    border-radius:1rem;
    >input{
        background-color:transparent;
        height:5.6rem;
        width: ${props => (props.width > 300 || props.width < 32 ? 300 : props.width)}px;
        max-width:18rem;
        border:none;
        padding: 12px;
        color: ${({theme}) => theme.colors.white};
        &::placeholder{
            color: ${({theme}) => theme.colors.grey_placeholder};
        }
    }
    >button{
        border:none;
        background:none;
        >svg{
            color: ${({theme}) => theme.colors.pink_base};
        }
    }
   
`