import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
           <DiretaFilho nome="ryan"  idade="17" nerd={true}/>
           <DiretaFilho nome="Yago"  idade="9" nerd={false}/>
        </div>
    )
}