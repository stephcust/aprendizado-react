import React from 'react';
import '../App.css'

export default function Nota(props){
    return (
        <div>
            <legend class="margin">Informe a nota {props.num}:</legend>
            <input
            class="margin" 
            type="text"
            name={props.nome}
            value={props.nota}
            onChange={(e)=>props.setNota(e)} />
        </div>
    )
}