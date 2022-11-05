import './App.css';
import useTitle from './hooks/useTitle/useTitle';

function App() {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 1000);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

export default App;
