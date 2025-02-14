import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Portfolio from './components/Portfolio.jsx';
import Additions from './components/services/Additions.jsx';
import Roofing from './components/services/Roofing.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flooring from './components/services/Flooring.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/services/Additions" element={<Additions />} />
        <Route path="/services/Roofing" element={<Roofing/>}/>
        <Route path="/services/Flooring" element={<Flooring/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
