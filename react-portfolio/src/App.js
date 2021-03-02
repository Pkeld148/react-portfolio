import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./containers/Home/Contact/Contact";
import Home from "./containers/Home/Home";
import Header from "./components/Header/Header";
import Portfolio from "./containers/Home/Portfolio/Portfolio";
import Footer from "./components/Header/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/react-portfolio" component={Home} />
            <Route exact path="/react-portfolio/contact" component={Contact} />
            <Route
              exact
              path="/react-portfolio/portfolio"
              component={Portfolio}
            />
          </Switch>
          <Footer />
        </Router>
      </header>
    </div>
  );
  
}


export default App;
