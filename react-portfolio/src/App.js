import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./containers/Home/Contact/Contact";
import Home from "./containers/Home/Home";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/* <NavbarVanilla /> */}
          <Switch>
            <Route exact path="/react-portfolio" component={Home} />
            <Route exact path="/react-portfolio/contact" component={Contact} />


          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
