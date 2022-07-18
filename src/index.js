import  ReactDOM from 'react-dom'
import React from 'react';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import './index.css';
const tag = <h1>Ola</h1>;

const el = document.getElementById("root");
ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="segundo componente"/>
    </div>,
    el
    )