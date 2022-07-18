import React from "react";
import produtos from "../../data/produtos";

export default props => {
    const produtosLi = produtos.map((produto) => {
        return (
            <li key={produto.id}>
                {produto.id}) {produto.nome} -> {produto.preco}
            </li>
        )
    })
    return (
        <div>
            <ul style={{
                listStyle: "none"
            }}>
               {produtosLi}
            </ul>
        </div>
    )
}