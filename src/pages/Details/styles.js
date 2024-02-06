import styled from "styled-components";

export const Container = styled.div``

export const Title = styled.div`
    display:flex;
    align-items:center;
    gap:1.9rem;
`

export const Main = styled.div`
    margin: 4rem 12.3rem 0 12.3rem;
    > p{
        text-align: justify;
    }
`

export const Autor = styled.div`

    display:flex;
    align-items: center;
    justify-content:flex-start;
    gap: 1rem;
    > img{
        width: 1.6rem;
        height:1.6rem;
        border-radius:50%;
    }
    > span{
        font-size:1.6rem;
        font-weight:400;
    }
    > svg{
        color:${({theme}) => theme.colors.pink_base}
    }
`

export const Tags = styled.div`
    display:flex;
    gap: .8rem;
    margin: 4rem 0;
`

