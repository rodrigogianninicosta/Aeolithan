import React , { useEffect } from 'react';
import './style.css';

export default function WriteName(props) {
    useEffect(() => {
        props.setMessage('Insira o nome do personagem')
    }, [props]);

    return(
        <div className="createchar-container">
            <input id="name" autoComplete="off" type={'text'} maxLength="30"/>
        </div>
    )
}