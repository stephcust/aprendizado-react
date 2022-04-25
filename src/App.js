import React, {useState} from 'react';
//import Led from './components/Led'
import Nota from './components/Nota'
import Resultado from './components/Resultado';


export default function App() {

  const [notas, setNotas] = useState({"nota1":0,"nota2":0,"nota3":0,"nota4":0})
  const handleChangeNota=(e)=>{
    if(e.target.getAttribute('name') == "n1"){
      setNotas({"nota1":e.target.value,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":notas.nota4})
    }
    else if(e.target.getAttribute('name') == "n2"){
      setNotas({"nota1":notas.nota1,"nota2":e.target.value,"nota3":notas.nota3,"nota4":notas.nota4})
    }
    else if(e.target.getAttribute('name') == "n3"){
      setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":e.target.value,"nota4":notas.nota4})
    }
    else if(e.target.getAttribute('name') == "n4"){
      setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":e.target.value})
    }
  }
  

  return (
    <>
     <Nota num = {1} nome={"n1"} nota={notas.nota1} setNota={handleChangeNota}/>
     <Nota num = {2} nome={"n2"} nota={notas.nota2} setNota={handleChangeNota}/>
     <Nota num = {3} nome={"n3"} nota={notas.nota3} setNota={handleChangeNota}/>
     <Nota num = {4} nome={"n4"} nota={notas.nota4} setNota={handleChangeNota}/>
     <Resultado somaNotas={
       parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
    </>
  );
}

// const cancelar = (obj) => {
//   return obj.preventDefault();
// }
{/* <a 
href='https://youtube.com/cfbcursos' 
target='_blank'
onClick={(e)=>cancelar(e)}>
  CFB Cursos
</a> */}

// const [ligado, setLigado] = useState(false);
//   const [log, setLog] = useState(false);
//   const [cor, setCor] = useState(1);

//   const vermelho={color: '#f00'}
//   const verde={color: '#0f0'}
//   const azul={color: '#00f'}
  
//   const cumprimento=()=>{
//     const hora = new Date().getHours();
//     if(hora >= 0 && hora <13){
//       return <p>Bom dia!</p>
//     }
//     if(hora >= 13 && hora < 18){
//       return <p>Boa tarde!</p>
//     }else {
//       return <p>Boa noite!</p>
//     }
//   }

//   const msgLogin=()=> ( 'Usuário Logado' )
//   const msgLogoff=()=> ( 'Favor logar' )
  
//   const retornaCor=(c)=>{
//     if(c === 1){
//       return vermelho;
//     }
//     if(c === 2){
//       return verde;
//     }if(c === 3) {
//       return azul;
//     }
//   }
//   const mudaCor=()=>{
//     setCor(cor+1)
//     if(cor > 2) {
//       setCor(1)
//     }
//   }
//   //setInterval(mudaCor, 1000)

// {cumprimento()}
//       <h1 style={retornaCor(cor)}>CFB Cursos</h1>
//       <button onClick={()=>mudaCor()}>Muda cor</button>

// const carros = ['HRV','Golf','Focus','Cruze','Argo']
  
// const listaCarros = carros.map(
//   (carro, i)=>
//     <li key={i}>{i} - {carro}</li>    
// )

// const [form, setForm] = useState({"nome":"","curso":"","ano":""});
// const handleFormChange=(e)=>{
//   if(e.target.getAttribute('name') === "fnome"){
//     setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
//   }
//   else if(e.target.getAttribute('name') === "fcurso"){
//     setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
//   }
//   else if(e.target.getAttribute('name') === "fano"){
//     setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value})
//   }
// }