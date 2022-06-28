import React, { useEffect } from "react";
import "./Agendamento.css";
import { useParams } from "react-router-dom";

import getDay from "date-fns/getDay";

import DatePicker from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


const Agendamento = () => {
  let params = useParams();

  const [dataInicial, setDataInicial] = React.useState(null);

  const buscarHorarios = async (date) => {
    console.log(date);
  };

  const deSegundaASabado = (data) => {
    const day = getDay(data);
    return day !== 0;
  };

  const deSegundaASexta = (data) => {
    const day = getDay(data);
    return day !== 0 && day !== 6;
  };

  const formatarData = (data) => {
    data.setHours(0);
    data.setMinutes(0);
    data.setSeconds(0);
    setDataInicial(data);
    // let date = data.toLocaleDateString('pt-BR');
    console.log(dataInicial);
  };

  const agendarHorario = async (data) => {
    if (!data) {
      alert("Selecione uma data");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/agendas/criar_agenda", data);
      console.log(response);
      
    } catch (error) {
      console.log(error)
    }
 }



  return (
    <div className="agendamento">
      <h1>Agendamento </h1>

      <DatePicker
        locale={ptBR}
        onSelect={(date) => buscarHorarios(date)}
        selected={dataInicial}
        onChange={(data) => formatarData(data)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Mês do agendamento"
        shouldCloseOnSelect={false}
        minDate={dataInicial}
        filterDate={deSegundaASexta}
      />

     <button onClick={()=>agendarHorario(dataInicial)}>Salvar</button>


    </div>
  );
};

export default Agendamento;

/*
  // console.log(agenda)
  let dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  let meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]

  const mostrarData = () => {
    // let diaSemana = ['Dom','Seg','Ter','Qua','Qui,'Sex','Sab'];
    let data =agenda[0].date
    // console.log(dias[new Date(data).getDay()]);
    
}

*/
