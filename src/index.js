import  ReactDOM from 'react-dom'
import React from 'react';
import './index.css';
import Primeiro from './components/basics/Primeiro';
const tag = <h1>Ola</h1>;

const el = document.getElementById("root");
ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
    </div>,
    el
    )