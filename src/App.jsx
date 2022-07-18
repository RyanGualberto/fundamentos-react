import React from 'react';
import Card from './components/layout/Card';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento'; 
import Numero from  './components/basics/NumRandom';
import './App.css'
const tag = <h1>Fundamentos react</h1>;

export default props => {
    return(
        <div className='app'>
            { tag }
            <div className='card-group'>

            <Card titulo="exemplo de card" color="blue">
                <Numero min={1} max={60}/>
            </Card>

            <Card titulo="Fragmento" color="red">
                <Fragmento/>   
            </Card>

            <Card titulo="Com Parametro" color="green">
                 <ComParametro titulo="segundo componente"/>
            </Card>

            <Card titulo="Primeiro componente" color="yellow">
                 <Primeiro></Primeiro>
            </Card>
            </div>

            
        </div>
        );
}