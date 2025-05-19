import { useState } from "react"

export const useCounter = ( initValue = 0 ) => {
  const [ counter, setcounter ] = useState( initValue );

  const increment = ( value = 1 ) => {
    setcounter(counter + value);
  }

  const decrement = ( value = 1 ) => {
    setcounter( counter - value);
  }

  const reset = () => {
    setcounter( initValue )
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}