import { createContext, useContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [sharedState, setSharedState] = useState(0);  
  const [name, setName] = useState("...");  
  const [medalla1, setMedalla1] = useState(0);  
  const [medalla2, setMedalla2] = useState(0);  
  const [medalla3, setMedalla3] = useState(0);  
  const [medalla4, setMedalla4] = useState(0);  
  
  return (
    <AppContext.Provider value={{
       secVideo: [sharedState, setSharedState],
       userName: [name, setName],
       medallaUno: [medalla1, setMedalla1],
       medallaDos: [medalla2, setMedalla2],
       medallaTres: [medalla3, setMedalla3],
       medallaCuatro: [medalla4, setMedalla4],
    }}>
      {children}
    </AppContext.Provider>
  );
}
