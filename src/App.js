import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import './index.css';
import WelcomeNote from './Components/WelcomeNote';
import Contact from './Components/Contact';
import Timeline from './Components/Timeline';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Header/>
      <WelcomeNote/>
      <About/>
      <Contact/>
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
