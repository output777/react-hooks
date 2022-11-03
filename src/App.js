import './App.css';
import useInput from './hooks/useInput';

function App() {
  const validator = (value) => value.length <= 10;
  const name = useInput('', validator);
  const nickname = useInput('', validator);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" placeholder="Name" {...name} />
      <input type="text" placeholder="Nickname" {...nickname} />
    </div>
  );
}

export default App;
