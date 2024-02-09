import styled from "styled-components";
import starFull from '../../assets/star.svg'
import starEmpty from '../../assets/StarEmpty.svg'
import { Link } from "react-router-dom";
export const Container = styled(Link)`
    color:${({theme}) => theme.colors.white_text};
    background-color: ${({theme}) => theme.colors.pink_base_note};
    width:100%;
    border-radius:1.6rem;
    padding: 3.2rem;
    > strong{
        font-size: 2.4rem;

    }
    > p{
        margin-top: 1.5rem;
        font-size: 1.6rem;
        font-weight:400;
        height: 4rem;
        overflow:hidden;
        text-overflow:ellipsis;
        color: ${({theme}) => theme.colors.grey_text_2};
    
    }
`


export const Estrelas = styled.div`
    display: flex;
    width:8.4rem;
    height:1.2rem;
    gap: 0.6rem;;
`

export const StarFull = styled.svg`
    width:1.2rem;
    height:1.2rem;
    background:url(${starFull}) no-repeat center center;
    background-size:cover;
`
export const StarEmpty = styled.svg`
    width:1.2rem;
    height:1.2rem;
    background:url(${starEmpty}) no-repeat center center;
    background-size:cover;
`

export const Tags = styled.div`
    display:flex;
    width:100%;
    height:2.4rem;
    gap: 0.8rem;
    margin-top:1.5rem;
`