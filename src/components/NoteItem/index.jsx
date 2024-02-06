import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";
import React, { useState, useEffect } from 'react';


export function NoteItem({isNew, value, onClick,placeholder, ...rest}){
    const [inputValue, setInputValue] = useState(value);
    const [inputWidth, setInputWidth] = useState((value.length + 1) * 16);

    useEffect(() => {
        setInputWidth((inputValue.length + 1) * 16);
    }, [inputValue]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    return(
        <Container isNew={isNew} width={inputWidth} {...rest}>
            <input type="text" value={inputValue} onChange={handleChange} readOnly={!isNew} placeholder={placeholder} />

            <button
                type='button'
                onClick={onClick}
                className={isNew? "button-add":"button-delete"}
            >
            {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}