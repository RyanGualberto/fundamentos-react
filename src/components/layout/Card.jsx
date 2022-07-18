import './Card.css'
import React from "react";

export default props => {
    const   CardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }
    return (
    <div className='Card' style={  CardStyle}>
            <div className='Titulo'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
        </div>
    </div>
    )
}