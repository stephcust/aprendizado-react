import React from 'react';
import '../App.css';

export default function Resultado(props){
    return (
        <div>
            <p className='margin'>Soma das notas: {props.somaNotas}</p>
            <p className='margin'>{props.somaNotas >= 28 ? "Aprovado":"Reprovado"}</p>
        </div>
    )
}