import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Innovation from './Pages/Innovation';
import Science from './Pages/Science';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Innovation />
      <Science />
      <Footer />
    </div>
  );
}

export default App;
