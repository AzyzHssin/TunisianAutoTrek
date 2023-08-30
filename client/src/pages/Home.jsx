import '../App.css';
import DisplayModels from '../components/DisplayModels';
import {Hero, Footer,Stats, Facts,Banner, Faqs} from '../components/index';
import Navbar from '../components/constants/Navbar'


function App() {
  return (
   <>
   <Navbar />
   <Hero />
   <DisplayModels />
   <Stats />
   <Facts/>
   <Faqs />
   <Banner />
   <Footer />

   </>
  );
}

export default App;
