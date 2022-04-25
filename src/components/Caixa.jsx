import react from 'react'

export default function Caixa(props){
    return (
        <>
            <p>{props.site}</p>
            {props.children[0]}
            {props.children[1]}
            {props.children[2]}
        </>
    )
}
//props.children -> retorna um array de elementos filhos passados no componente pai.
//para acessar um filho específico é necessário utilizar o index do elemento