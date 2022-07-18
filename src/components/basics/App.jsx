import React from 'react';
import Card from '../layout/Card';
import Primeiro from './Primeiro';
import ComParametro from './ComParametro';
import Fragmento from './Fragmento'; 
import Numero from  './NumRandom';
const tag = <h1>Fundamentos react</h1>;

export default props => {
    return(
        <div id='app'>
            { tag }
            <Card titulo="exemplo de card">
                <Numero min={1} max={60}/>
            </Card>

            <Card titulo="Fragmento">
                <Fragmento/>   
            </Card>

            <Card titulo="Com Parametro">
                 <ComParametro titulo="segundo componente"/>
            </Card>

            <Card titulo="Primeiro componente">
                 <Primeiro></Primeiro>
            </Card>

            
        </div>
        );
}