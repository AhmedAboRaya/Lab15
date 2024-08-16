import logo from './logo.svg';
import Navbar from './Components/Navbar.js';
import './App.css';
import Home from './Components/Home.js';
import Footer from './Components/Footer.js';

function App() {

  let prop = "first";
  return (
    <div className="App">
      <Navbar />
      <Home title={prop}/>
      <Footer />
    </div>
  );
}

export default App;
