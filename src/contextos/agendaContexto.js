import { createContext } from 'react';

export const AgendaContexto = createContext();

const initialState={}

// componente provedor de contexto


const AgendaProvider = ({ children }) => {
 <AgendaContexto value={initialState}>{children} </AgendaContexto>
}