import  ReactDOM from 'react-dom'
import React from 'react';
import './index.css';

const tag = <h1>Ola</h1>;

const el = document.getElementById("root");
ReactDOM.render(
    <div>
        { tag }
    </div>,
    el
    )