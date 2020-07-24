import React from "react";


export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_LOGIN":
            localStorage.setItem('token',payload)
          return { ...state, user:localStorage.getItem('token')};
        case "LOGOUT":
            localStorage.removeItem('token')
            return { ...state, user:null};
        default:
          return state;
      }
};

const AppContext = React.createContext();

export default AppContext;