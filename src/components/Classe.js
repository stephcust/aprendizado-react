import React from "react";

class Classe extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return (
            <>
             <h1>Primeiro componente de classe</h1>
             <p>Canal: {this.props.canal}</p>
             <p>Curso: {this.props.curso}</p>
            </>
        )
    }
}

export default Classe