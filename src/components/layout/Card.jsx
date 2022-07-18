import './Card.css'
import React from "react";

export default props => {
    return <div className='Card'>
        <div>
            <div className='Titulo'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    </div>
}