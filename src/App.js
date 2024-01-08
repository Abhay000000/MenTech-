import "./App.css";
import Footer from "./component/Section/Footer/Main";
import StickyNavbar from "./component/Section/Navbar/Main";
import Home from "../src/component/Pages/Home/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/Pages/About/Main";
import Service from "./component/Pages/Services/Main";
import Portfolio from "./component/Pages/Portfolio/Main";
import Pages from "./component/Pages/Pages/Main";
import Contact from "./component/Pages/Contact/Main";
import HomeTwo from "./component/Pages/HomeTwo/Main";
import HomeThree from "./component/Pages/HeroThree/Main";

function App() {
  return (
    <div>
      <Router>
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>.
          <Route path="/home2" element={<HomeTwo></HomeTwo>}></Route>
          <Route path="/home3" element={<HomeThree></HomeThree>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Service" element={<Service></Service>}></Route>
          <Route path="/Portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/Pages" element={<Pages></Pages>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
