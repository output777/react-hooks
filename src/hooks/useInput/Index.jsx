import React from 'react'
import useInput from './useInput';

const Index = () => {
  const validator = (value) => value.length <= 10;
  const name = useInput('', validator);
  const nickname = useInput('', validator);

  return (
    <div>
      <h1>Hello</h1>
      <input type="text" placeholder="Name" {...name} />
      <input type="text" placeholder="Nickname" {...nickname} />
    </div>
  )
}

export default Index;