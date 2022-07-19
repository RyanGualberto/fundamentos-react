import React,{useState} from "react";
import IndiretaFilho from './IndiretaFilho'

export default props => {

    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);
function fornecerInformacoes(nome, idade, nerd){
    setNome(nome) 
    setIdade(idade) 
    setNerd(nerd) 
    
    console.log(nome, idade, nerd);
}
    return (
        <div>
            <div>
                <span>{nome}</span><br/>
                <span>{idade}</span><br/>
                <span>{nerd ? 'verdadeiro' : 'falso'}</span>
            </div>
            <IndiretaFilho quandoclicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}