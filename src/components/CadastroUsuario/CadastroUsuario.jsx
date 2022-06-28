import axios from "axios";
import React,{useState,useEffect} from "react";
import "./CadastroUsuario.css";

const CadastroUsuario = () => {

    const [cliente, setCliente] = useState({nome:"",email:"",nascimento:"",telefone:"",endereco:"",senha:"",cpf:""});

const tratarCampos = (e) => {
    e.preventDefault();  
    setCliente({...cliente, [e.target.name]:e.target.value});
    }

    const cadastrar = async (cliente) => {
        try {
            const res = await axios.post('http://localhost:5000/api/usuarios/cadastrar', cliente)
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    
    const enviar = async(e) => {
        e.preventDefault();
        if (!cliente.nome || !cliente.email || !cliente.nascimento || !cliente.telefone || !cliente.endereco || !cliente.cpf) {
            alert("Preencha todos os campos");
            return;
        }
        const novoCliente ={...cliente}
        console.log(novoCliente);
       await cadastrar(novoCliente);

    
    }



  return (
    <div className="cadastro_cliente">
          <h1 className="cadastro_title">Cadastrar Cliente</h1>
          <form className="cadastro_form-cliente" onSubmit={(e)=>enviar(e)} >
              <input value={cliente.nome} placeholder="Nome" onChange={(e)=>tratarCampos(e)} type="text" name="nome" />
              <input value={cliente.cpf} placeholder="CPF" onChange={(e)=>tratarCampos(e)} type="text" name="cpf" />
              <input value={cliente.email} placeholder="Email" onChange={(e)=>tratarCampos(e)} type="email" name="email" />
              <input value={cliente.nascimento} placeholder="Data Nascimento" onChange={(e)=>tratarCampos(e)} type="date" name="nascimento" />
              <input value={cliente.telefone} placeholder="Telefone" onChange={(e)=>tratarCampos(e)} type="tel" name="telefone" />
              <input value={cliente.endereco} placeholder="Endereco" onChange={(e) => tratarCampos(e)} type="text" name="endereco" />
              <button className="salvar" type="submit">Salvar</button>
          </form>
    </div>
  );
};
// ## nome, email, nascimento, senha, telefone, endereco
export default CadastroUsuario;
