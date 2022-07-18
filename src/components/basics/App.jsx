import React from 'react';
import Primeiro from './Primeiro';
import ComParametro from './ComParametro';
import Fragmento from './Fragmento'; 
import Numero from  './NumRandom';
const tag = <h1>Ola</h1>;

export default props => {
    return(
        <div>
            { tag }
            <Numero min={1} max={60}/>
            <Fragmento/>   

            <ComParametro titulo="segundo componente"/>
            <Primeiro></Primeiro>
        </div>
        );
}