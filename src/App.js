
import './App.css';
import Team from './OurTeam/Team';
import Carousel from './Carousel/Carousel'
import Navbar from './components/navbar/Navbar'
import Roadmap from './components/Roadmap/Roadmap'
import Home from './Home/Home'
import About from './about/About'
import Footer from './footer/Footer'
import Faqs from './Faqs/Test'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Carousel />
      <Roadmap/>
      <Faqs/>
      <Team/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
