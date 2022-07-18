import React from "react";

export default (props) => {
        const { min, max} = props;
        const random  = parseInt(Math.random() * (max - min)) + min;

    return <div>
     <h2>Valor Aleatorio</h2>
     <p>
      <strong>
        Valor Minimo:
      </strong>
      {min}
     </p>
     <p>
      <strong>
        Valor Maximo:
      </strong>
      {max}
     </p>
     <p>
      <strong>
        Valor Escolhido:
      </strong>
      {random}
     </p>
    </div>
}