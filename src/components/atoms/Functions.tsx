import { useEffect, useState } from "react";


type prop = {
    key: string;
    value: number
}

  const usePersistedState = (p0: string, p1: boolean, { key, value }: prop) => {
    const [state, setState] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : value;
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
  
    return [state, setState] as const;
  }

function Test() {
  return (
    <div>
      
    </div>
  )
}

export default Test

  

// eslint-disable-next-line react-refresh/only-export-components
export  {usePersistedState};