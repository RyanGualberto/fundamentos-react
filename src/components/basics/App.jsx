import React from 'react';
import Primeiro from './Primeiro';
import ComParametro from './ComParametro';
import Fragmento from './Fragmento';
const tag = <h1>Ola</h1>;

export default props => {
    return(
        <div>
            { tag }
            <Fragmento/>   

            <ComParametro titulo="segundo componente"/>
            <Primeiro></Primeiro>
        </div>
        );
}