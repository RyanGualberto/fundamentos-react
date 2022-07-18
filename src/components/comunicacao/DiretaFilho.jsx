import React from "react";

export default props => {
    return (
        <div>
            <div>{props.nome}</div>
            <div>{props.idade}</div>
            <div>{props.nerd ? 'verdadeiro' : 'falso'}!</div>
        </div>
    )
}