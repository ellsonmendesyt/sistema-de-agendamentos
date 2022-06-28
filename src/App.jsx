import React,{useState,useEffect} from 'react'
import { Routes,Route } from 'react-router-dom';
import CadastroUsuario from './components/CadastroUsuario/CadastroUsuario';
import ListaClientes from './components/ListaClientes/ListaClientes';
import axios from 'axios';
import Layout from './components/Layout/Layout';
import Agendamento from './components/Agendamento/Agendamento';
import Agenda from './components/Agenda/Agenda';

function App() {
const [clientes,setClientes]= useState([]);

  const carregarClientes = async (url) => { 
  try {
    const resposta = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'allow-control-allow-origin': '*'
      }
    })
    // console.log(resposta)
    setClientes(resposta.data)
  } catch (error) {
    // console.log(error)
    if (error.code === 404) {
      alert('Nenhum cliente encontrado')
    }
  }
  } 
  
useEffect(() => {
  carregarClientes('http://localhost:5000/api/usuarios');
},[])

  return (
  

    
    
    <Routes>
      <Route path="/" element={<Layout />} >
        
     <Route index path='clientes' element={<ListaClientes clientes={clientes} />} />
        <Route path='cadastro' element={<CadastroUsuario />} />
        <Route path="agendamento/:clienteId" element={<Agendamento />} />
        <Route path="agenda" element={<Agenda />} />

    </Route>
    
  </Routes>
)

}

export default App;
