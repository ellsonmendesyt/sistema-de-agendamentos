import React, { useEffect, useState } from "react";
import "./Agenda.css";

// import getDay from "date-fns/getDay";

import DatePicker from "react-datepicker";
// import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import BotaoPontos from "../BotaoPontos/BotaoPontos";

const Agenda = () => {
  const [dataInicial, setDataInicial] = useState(new Date());
  const [horarios, setHorarios] = useState([]);
  const [novoHorario, setNovoHorario] = useState("00:00");

  const procurarHorarios = async (data) => {
    // console.log(data);
    const response = await axios.get(
      `http://localhost:5000/api/agendas/${data}`
    );
    setHorarios(response.data);
  };

  useEffect(() => {
    async function prepararDataIniciarBusca() {
      let data = new Date(dataInicial);
      data.setHours(0);
      data.setMinutes(0);
      data.setSeconds(0);
      data = data.toISOString().split("T")[0];
      await procurarHorarios(data);
    }
    prepararDataIniciarBusca();
  }, [dataInicial]);

  const criarAgenda = async (e) => {
    e.preventDefault();
   if(novoHorario.length === 0 || novoHorario === "00:00"){
     alert("Preencha o horário");
     return;
    }
    const horario = {
      dia: new Date(dataInicial).toISOString().split("T")[0],
      hora: novoHorario,
    }
 
   
    try {
      const horariosdoBD = await axios.post("http://localhost:5000/api/agendas/agendar", horario);
      console.log(horariosdoBD);
      setHorarios([...horarios, ...horariosdoBD]);
      
    } catch (error) {
      console.log(error.message)
    }

   
   

 }


  return (
    <div className="agenda">
      <div className="coluna-esquerda">
        <div className="listagem-horario-painel">
          <h3>Atualizar Horário</h3>
            <DatePicker
              selected={dataInicial}
              onChange={(date) => setDataInicial(date)}
              onSelect={(date) => setDataInicial(date)}
              />
          {/* {console.log(horarios)} */}
              <ul className="lista-horarios">
              {horarios.length > 0 ? (
                horarios.map((horario, i) => <li key={i}> <button className={`horario-btn ${horario.ocupado===true? 'ocupado': ''}`}>{horario.hora}</button> </li>)
              ) : (
                <li>Indisponível</li>
              )}
            </ul>

        </div>
        <div className="criar-horario-painel">
          <h3>Criar Horário</h3>
          <form  onSubmit={async(e)=> await criarAgenda(e)}>
            <input
              onChange={(e) => setNovoHorario(e.target.value)}
              className="agenda-hora"
              type="time"
              min="7:00"
              max="18:00"
            />
            <button className="criar-hora-btn">Criar</button>
          </form>
        </div>
        </div>
          <div className="coluna-direita">
          <BotaoPontos />
        </div>
    </div>
  );
};

export default Agenda;
