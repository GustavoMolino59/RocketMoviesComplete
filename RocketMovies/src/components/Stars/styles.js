import styled from "styled-components";
import starFull from '../../assets/star.svg'
import starEmpty from '../../assets/StarEmpty.svg'
export const Container = styled.div`
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