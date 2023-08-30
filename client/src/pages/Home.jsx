import '../App.css';
import DisplayModels from '../components/DisplayModels';
import {Hero, Footer,Stats,Banner, Faqs, Testimonials, Contact} from '../components/index';
import Navbar from '../components/constants/Navbar'


function App() {
  
  return (
   <>
   <Navbar  />
   <Hero />
   <DisplayModels />
   <Stats />
   <Testimonials />
   <Faqs />
   <Banner />
   <Contact />
   <Footer />

   </>
  );
}

export default App;
