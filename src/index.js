import  ReactDOM from 'react-dom'
import React from 'react';

const tag = <h1>Ola</h1>;

const el = document.getElementById("root");
ReactDOM.render(
    <div>
        { tag }
    </div>,
    el
    )