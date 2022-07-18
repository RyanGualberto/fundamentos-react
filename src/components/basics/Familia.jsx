import React from "react";
import FamiliaMembro from './FamiliaMembro';

export default props => {
    return (
        <div>
             <FamiliaMembro nome="Ryan " sobrenome={props.sobrenome}/>
             <FamiliaMembro nome="Cassio " {...props}/>
             <FamiliaMembro nome="Chris " sobrenome="gualberto"/>
        </div>
    )
}