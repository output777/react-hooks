import { useCallback, useState } from 'react'

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  // change
  const onChange = useCallback((event) => {
    const {value} = event.target;
    let willUpdate = true;
    if(typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if(willUpdate) {
      setValue(value);
    }
  }, []);
  return {value, onChange};
}

export default useInput;