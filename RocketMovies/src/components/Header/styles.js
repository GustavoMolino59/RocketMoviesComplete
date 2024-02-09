import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    height:11.6rem;
    display:flex;
    gap:6.4rem;
    align-items:center;
    padding: 3rem 12.3rem;
    
    > span:first-child{
        color: ${({theme}) => theme.colors.pink_base};
        font-size:2.4rem;
        font-weight:700;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items:center;
    >div{
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        width:12.5rem;
        >strong{
            font-size:1.4rem;
            color: ${({theme})=>theme.colors.white_text};
        }
        >a{
            font-size:1.4rem;
            color:${({theme}) => theme.colors.grey_placeholder};
            
        }
    }
    >a img{
        width: 6.4rem;
        height:6.4rem;
        border-radius:50%;
        margin-left:.9rem;
        border: .2rem solid #3E3B47;
    }
`

export const Form = styled.form`
    width:100%;
    display:flex;
    gap:1rem;
`