import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callAPI}>Call API</button>
      </header>
    </div>
  );
}
const callAPI = ()=>{
  fetch('http://localhost:9000/details',{method: 'GET'})
  .then(data => data.json())
  .then(json => alert(JSON.stringify(json)))

}

export default App;
