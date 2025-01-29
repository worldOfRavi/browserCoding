import { createContext, useState } from "react";


export const useContextHook = createContext();

const UseContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1)
    }
    function decrement(){
        count > 0 ? setCount(count-1) : null 
    }
  return (
    <useContextHook.Provider value={{count, increment, decrement}}>{children}</useContextHook.Provider>
  );
};

export default UseContextProvider;



