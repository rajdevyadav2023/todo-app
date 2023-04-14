import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="form">
          <div className="fields">
            <input type="text" placeholder='Enter Task' />
            <input type="text" placeholder='Remarks' />
          </div>
          <div className="btns">
            <button>Add</button>
          </div>
        </div>
        <div className="result">

        </div>
      </div>
    </div>
  );
}

export default App;
