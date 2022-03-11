import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import './css/custom.css';
import './css/style.css';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="section-container">
          <Routes>
            <Route index path='/' element={<Home/>}></Route>
            <Route path="/Gallery/*" element={<Gallery/>}></Route>
            <Route exact path="/Contact" element={<Contact/>}></Route>
            <Route exact path="/About" element={<About/>}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>    
  );
}

export default App;
