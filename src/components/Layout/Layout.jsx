import { Outlet } from 'react-router-dom';
import './Layout.css';
import { NavLink,Link } from 'react-router-dom';

const Layout = () => {
    return (
      <div className="container">
           
            <div className="topbar">Barra Superior</div>
       
           
        <main className="main-content">
          <Outlet />
        </main>
            <div className="sidebar">
                <ul>
                    <li> <NavLink to="/clientes" >Clientes</NavLink></li>
                    <li> <NavLink to="/cadastro" >Cadastro</NavLink></li>
                    <li> <NavLink to="/agenda" >Agenda</NavLink></li>
              </ul>
            </div> 
           
  
           
            <div className='footer'>Footer</div>
  
      </div>
        
    )
}

export default Layout;