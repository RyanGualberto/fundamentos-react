import React from 'react';
import Card from './components/layout/Card';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento'; 
import Numero from  './components/basics/NumRandom';
import FamiliaMembro from './components/basics/FamiliaMembro';
import Familia from './components/basics/Familia';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProduto from './components/repeticao/TabelaProduto.jsx'


import './App.css'
const tag = <h1>Fundamentos react</h1>;

export default props => {
    return(
        <div className='app'>
            { tag }
            <div className='card-group'>

            <Card titulo="#07 - Desafio Repeticao" color="gray">
                <TabelaProduto></TabelaProduto>
            </Card>

            <Card titulo="#06 - Repeticao" color="orange">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="pink">
                <Familia sobrenome="Gualberto">
                     <FamiliaMembro nome="Ryan " />
                     <FamiliaMembro nome="Cassio " />
                     <FamiliaMembro nome="Chris "/>
                     <FamiliaMembro nome="Chris "/>

                </Familia>
            </Card>

            <Card titulo="#04 - exemplo de card" color="blue">
                <Numero min={1} max={60}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="red">
                <Fragmento/>   
            </Card>

            <Card titulo="#02 - Com Parametro" color="green">
                 <ComParametro titulo="segundo componente"/>
            </Card>

            <Card titulo="#01 - Primeiro componente" color="yellow">
                 <Primeiro></Primeiro>
            </Card>
            </div>

            
        </div>
        );
}