import React from "react";
import If from './If'
export default props => {
    const usuario = props.usuario || {} 
    return (
        <div>
            <If test={usuario && usuario.nome}>
            Seja Bem Vindo <strong>{usuario.nome}</strong>!
            </If>
            <br />
            <If test={!usuario || !usuario.nome}>
            Seja Bem Vindo <strong>Amigo</strong>!
            </If>
        </div>
    )
}