import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    display:flex;
    background-color:transparent;
    color: ${({theme}) => theme.colors.pink_base};
    font-size: 1.6rem;
    font-weight:400;
    border:none;
`