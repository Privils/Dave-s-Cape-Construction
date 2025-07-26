import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Portfolio from './components/Portfolio.jsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/Portfolio" element={<Portfolio />}/>
      </Routes>
      <Footer />
    </Router>
  );

}

export default App;
