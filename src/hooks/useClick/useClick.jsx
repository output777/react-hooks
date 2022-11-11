import { useEffect } from 'react';
import { useRef } from 'react'

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    console.log(element.current, Boolean(element.current));
    if(element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current) {
        element.current.removeEventListener("click", onClick)
      };
    }
  }, [])
  return element;
}

export default useClick