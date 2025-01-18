import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Portfolio from './components/Portfolio.jsx';

function App() {
  // add routers
  return (
  <>
  <Header />
  <Portfolio />
  <Footer />
  </>
  );
}

export default App;
