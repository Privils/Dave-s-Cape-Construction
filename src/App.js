import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Portfolio from './components/Portfolio.jsx';
import Additions from './components/services/Additions.jsx';
import Roofing from './components/services/Roofing.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='d-m-projects'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/services/Additions" element={<Additions />} />
        <Route path="/services/Roofing" element={<Roofing/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
