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

  return (
    <div className="agenda">
          <div className="coluna-esquerda">
          <DatePicker
            selected={dataInicial}
            onChange={(date) => setDataInicial(date)}
            onSelect={(date) => setDataInicial(date)}
            />
            {console.log(horarios)}
            <ul className="lista-horarios">
            {horarios.length > 0 ? (
              horarios.map((horario, i) => <li key={i}> <button className={`horario-btn ${horario.ocupado===true? 'ocupado': ''}`}>{horario.hora}</button> </li>)
            ) : (
              <li>Indisponível</li>
            )}
          </ul>
        </div>
          <div className="coluna-direita">
          <BotaoPontos />
        </div>
    </div>
  );
};

export default Agenda;
