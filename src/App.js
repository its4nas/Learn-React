import logo from './logo.svg';
import './App.css';
// import Hello from './Components/Hello';
// import Message from './Components/Message';
// import Array from './Components/array';
// import Form from './Components/form';
// import Todo from './Components/Todo';
import InlineCompopnent from './Components/InlineComponent';
import StylesheetComponent from './Components/StylesheetComponent';
import ModuleComponent from './Components/ModuleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first REACT Code...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* <Message name="this is a name"/> */}
      {/* <Form /> */}
      {/* <Todo></Todo> */}
      <InlineCompopnent></InlineCompopnent> 
      <StylesheetComponent></StylesheetComponent>
      <ModuleComponent></ModuleComponent>

    </div>
  );
}

export default App;
