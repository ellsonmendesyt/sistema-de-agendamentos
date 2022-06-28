import React from "react";
import Cliente from "../Cliente/Cliente";
import "./ListaClientes.css";

const ListaClientes = ({ clientes }) => {




  return (
    <div className="lista_clientes">
      {clientes.length >0 ?
        clientes.map((cliente) => (
          <Cliente key={cliente._id} cliente={cliente} />
           
          
        )): <h1>Nenhum cliente encontrado</h1>}
    </div>
  );
};

export default ListaClientes;
