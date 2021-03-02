import { HashRouter, Route } from "react-router-dom";
import Contact from "./containers/Home/Contact/Contact";
import Home from "./containers/Home/Home";
import Header from "./components/Header/Header";
import Portfolio from "./containers/Home/Portfolio/Portfolio";
import Footer from "./components/Header/Footer/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
