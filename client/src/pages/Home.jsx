import '../App.css';
import DisplayModels from '../components/DisplayModels';
import {Hero, Footer, Faqs} from '../components/index';
import Navbar from '../components/constants/Navbar'



function App() {
  return (
   <>
   <Navbar />
   <Hero />
   <DisplayModels />
   <Faqs />
   <Footer />

   </>
  );
}

export default App;
