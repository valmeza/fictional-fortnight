import Header from './components/Header';
import HelloWorld from './components/HelloWorld';
import Footer from './components/Footer';
import {
  // as is an alias for BrowserRouter
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// this is a react component
// stateless react component because it is using a function
// also called a functional component
function App() {
  return (
    // This funny tag syntax is neither a string nor HTML.
    // It is called JSX, and it is a syntax extension to JavaScript.
    <div>
      {/* <CounterExample/> */}

      <Router>
        
        <Header/>
        <HelloWorld name="Valeria" /> 

        {/* what our switch will do is going to look for a route that matches the path and switch to it */}
        <Switch>
          
          <Route exact path="/">
              <h1>This will be the home page</h1>
          </Route>
          <Route path="/about">
            <h1>This will be the about page</h1>
          </Route>
          
        </Switch>
        
        <Footer />

      </Router>

    </div>
    // JSX elements must be wrapped in an enclosing tag
    // you cannot have two if you want to add more elements they must be
    // inside of one enclosing tag like above
  );
}

export default App;

