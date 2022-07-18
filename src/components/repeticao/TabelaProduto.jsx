import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css'
export default props => {
    const prodRow = produtos.map((produto) => {
        return (
            <tr key={produto.id}>
                <td>{produto.id} </td>
                <td>{produto.nome}</td> 
                <td>R$ {produto.preco}</td>
            </tr>
        )
    })
    return (
        <div>
            <table className="table">     
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preco</th>
                <tbody>
                  {prodRow}
                </tbody>
            </table>
        </div>
    )
}