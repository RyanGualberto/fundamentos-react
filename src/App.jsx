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
import ParOuImpar from './components/conditions/ParOuImpar'
import UsuarioInfo from './components/conditions/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'

import './App.css'
const tag = <h1>Fundamentos react</h1>;

export default props => {
    return(
        <div className='app'>
            { tag }
            <div className='card-group'>
            <Card titulo="#12 - Contador" color="#b7950b  ">
                <Contador numeroInicial={15}></Contador>
            </Card>
            <Card titulo="#11 - Componente Controlado (Input)" color="#34495e ">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicacao Indireta" color="#ef464e">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicacao Direta" color="brown">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderizacao condicional: Componente" color="#01996f">
                <UsuarioInfo usuario={{nome: 'Ryan'}}/>

            </Card>

            <Card titulo="#08 - Renderizacao condicional: Ternario" color="purple">
                <ParOuImpar numero={21}></ParOuImpar>
            </Card>

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