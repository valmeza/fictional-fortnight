import './App.css';
import CounterExample from './components/CounterExample';
import HelloWorld from './components/HelloWorld';

// this is a react component
// stateless react component because it is using a function
// also called a functional component
function App() {
  return (
    // This funny tag syntax is neither a string nor HTML.
    // It is called JSX, and it is a syntax extension to JavaScript.
    <div>
      {/* <HelloWorld name="Valeria"/>  */}
      <CounterExample/>
    </div>
    // JSX elements must be wrapped in an enclosing tag
    // you cannot have two if you want to add more elements they must be
    // inside of one enclosing tag like above
  );
}

export default App;

