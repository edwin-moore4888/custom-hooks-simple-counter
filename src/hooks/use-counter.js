import { useState, useEffect} from 'react';
// must include "use" at the beginning of the name to let react know that it is a custom hook
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(forwards) {
            setCounter((prevCounter) => prevCounter + 1);    
        } else {
            setCounter((prevCounter) => prevCounter -1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);

    return counter;
}

export default useCounter;