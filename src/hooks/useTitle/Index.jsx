import React from 'react'
import useTitle from './useTitle';

const Index = () => {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 1000);

  return (
    <div>Index</div>
  )
}

export default Index