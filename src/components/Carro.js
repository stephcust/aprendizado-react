import React from "react";

class Carro extends React.Component {
    constructor(props) {
        super(props)
        this.modelo = 'Golf'
        this.state={
            ligado: false,
            velAtual: 0
        }
    }
    ligarDesligar(){
        //1 forma: this.setState({ligado:!this.state.ligado})
        //2 forma:
        this.setState(
            (state)=>(
                { ligado: !state.ligado }
            )
        )
    }
    acelerar(){
        this.setState(
            (state, props)=>(
                { velAtual: state.velAtual + props.fator }
            )
        )
    }
    render() {
        return (
            <>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado?"sim":"não"}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={()=>this.ligarDesligar()}>{this.state.ligado?"Desligar":"Ligar"} Carro</button>
                <button onClick={()=>this.acelerar()}>Acelerar</button>
            </>
        )
    }
}

export default Carro