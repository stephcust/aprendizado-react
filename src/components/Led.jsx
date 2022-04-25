import React from 'react';
import LedVerde from './imgs/led_verde.jpg'
import LedVermelho from './imgs/led_vermelho.jpg'

export default function Led(props) {
  
    const imgStyle = {width:'100px', height:'100px',display:'flex',alignItems:'center'}

  return (
    <>
      <img style={imgStyle} src={props.ligado ? LedVerde : LedVermelho} alt=''/>
      <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado ? 'Desligar':'Ligar'}</button>
    </>
  );
}


