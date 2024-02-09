import styled from "styled-components";

export const Container = styled.div`
`

export const Main = styled.main`
    padding: 0 12.3rem;
    >div{
        display:flex;
        justify-content: space-between;
        > button{
            width:20.7rem;
            height:4.8rem;
        }
        >h1{
            font-size: 3.2rem;
            font-weight: 400;
            color: ${({theme}) => theme.colors.white}
        }
    }
    section::-webkit-scrollbar {
        width: .8rem;
        height:.6rem;
        border-radius: 8px;
    }

    section::-webkit-scrollbar-track {
        border-radius: 8px;
        background: transparent;

    }

    section::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.pink_base}; 
        border-radius: 8px;
    }
`

export const Section = styled.section`
    display:flex;
    height:71rem;
    flex-direction:column;
    overflow-y:auto;
    gap: 2.4rem;
    margin-top:3.7rem ;
    
`