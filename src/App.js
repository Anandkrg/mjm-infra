import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/bootstrap.min.css";
import "./styles/App.scss"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import AboutBanner from "./components/About/AboutCap";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<AboutBanner/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
