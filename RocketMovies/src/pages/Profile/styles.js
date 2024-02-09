import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100vh;
    > header{
        display:flex;
        width:100%;
        background-color: ${({theme}) => theme.colors.pink_base_note};
        padding: 6.4rem 14.4rem;
    }
    
`

export const Form = styled.form`
    max-width:340px;
    margin:30px auto 0;
    display:flex;
    flex-direction: column;
    >div:nth-child(4){
        margin-top:24px;
    }
    > button{
        margin-top:2.4rem;
    }
`
export const Avatar = styled.div`
    position: relative;
    margin: -11rem auto 3.2rem;
    
    > img{
        width:18.6rem;
        height:18.6rem;
        border-radius:50%;
    }

    >label{
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.colors.pink_base};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 8px;
        cursor: pointer;
        bottom: 7px;
        right:7px;
        input{
            display: none;
        }

        svg{
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.colors.background_base};
        }
    }
`