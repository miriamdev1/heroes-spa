import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types } from '../types/types';

// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user,
  }
}


export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init);


  // login hace un dispatch de una accion
  const login = (name = '') => {

    const user = { id: 'ABC', name }
    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };

    // el dispatch espera una accion, en este caso la accion es un logout
    dispatch(action);
  }


  return (
    <AuthContext.Provider value={{
      // atributos
      ...authState,

      // metodos que quiero exponer
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
