import './App.css';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
     <button className='redButton'>Vermelho</button>
     <button className='blackButton'>Preto</button>
     <h1>CANASTRA</h1>
     <hr/>
    <Table />
    </div>
  );
}

export default App;
