import styled from "styled-components";


export const Container = styled.div`
    background-color:${({theme}) => theme.colors.black_button};
    padding: .5rem 1.6rem;
    border-radius:.8rem;
    font-size: 1.2rem;
    font-weight:400 ;
    align-items:center;
    justify-content:center;
    color:${({theme}) => theme.colors.grey_text_tag};
`