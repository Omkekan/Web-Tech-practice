import './App.css';
import FunctionCo from './component/FunctionCo';
import ClassComp from './component/ClassComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Welcome You ALL!!</h1>
      <h4> Its Nice To Meet You!</h4>
      <FunctionCo/>
      <ClassComp/>
    </div>
  );
}

export default App;
