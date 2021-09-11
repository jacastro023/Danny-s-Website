import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Legos from "./pages/Legos";
import Roblox from "./pages/Roblox";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Cars" component={Cars} />
          <Route exact path="/Legos" component={Legos} />
          <Route exact path="/Roblox" component={Roblox} />
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
