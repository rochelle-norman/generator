import { About } from "./components/shared/about/About";
import { Footer } from "./components/shared/footer/Footer";
import { Header2 } from "./components/resources/Resources";
import { Header } from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/resources">
            <Header2 />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </Router>
      <About />
      <Footer />
    </>
  );
}

export default App;
