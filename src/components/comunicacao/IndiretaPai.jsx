import React,{useState} from "react";
import IndiretaFilho from './IndiretaFilho'

export default props => {

    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);
function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
    nome = nomeParam
    idade = idadeParam
    nerd = nerdParam
    
    console.log(nome, idade, nerd);
}
    return (
        <div>
            <div>
                <span>{nome}</span>
                <span>{idade}</span>
                <span>{nerd ? 'verdadeiro' : 'falso'}</span>
            </div>
            <IndiretaFilho quandoclicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}