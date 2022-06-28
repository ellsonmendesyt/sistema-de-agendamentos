import React, { useState } from "react";
import "./Cliente.css";
import {useNavigate} from 'react-router-dom'

import foto from "../../assets/cristina.jpg";
import avatar from "../../assets/cliente.jpg";
const Cliente = ({ cliente }) => {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
let navigate = useNavigate()


  const formatarData = (data) => {
    return new Date(data).toLocaleDateString("pt-BR");
  };

  const formatarTelefone = (tel) => {
    return tel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const criarAgendamento = (clienteId) => {
    console.log(clienteId)
    navigate(`/agendamento/${clienteId}`);
}


  return (
    <div className="card_cliente">
      <div className="card_cliente-body">
        <div className="card_cliente-avatar">
          <div className="avatar_foto">
            <img src={foto} alt="" />
          </div>
        </div>
        <div className="card_cliente-info">
            <p>{cliente.nome}</p>
          {/* <p>{formatarData(cliente.nascimento)}</p> */}
          <p>{formatarTelefone(cliente.telefone)}</p>
          {/* <p>{cliente.cpf}</p> */}
          <p>{cliente.email}</p>
          {/* <p>{cliente.endereco}</p> */}
        </div>
        <div className="card_cliente-acoes">
          <button
            onClick={(e) => setMostrarOpcoes(!mostrarOpcoes)}
            className="acoes_btn"
          >
            ...
          </button>

          <div className={`submenu ${mostrarOpcoes === true ? "show" : ""}`}>
            <div className="submenu_top">
              <button onClick={() => setMostrarOpcoes(false)}> x </button>
            </div>
            <div className="submenu_content">
              <button onClick={()=>criarAgendamento(cliente._id)}>  Agendar</button>
              <button>Reagendar</button>
              <button>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cliente;

// cpf, nome, email, nascimento, senha, telefone, endereco
