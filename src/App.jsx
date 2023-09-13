import './App.css';
import Nav from './components/nav'
import Home from './components/home'
import About from './components/about';
import Whatido from './components/whatido';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Lastwork from './components/lastwork';
import Free from './components/free';
import Contact from './components/contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Nav />
    <Home />
    <About />
    <Whatido />
    <Lastwork />
    <Free />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
