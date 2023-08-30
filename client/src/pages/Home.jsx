import '../App.css';
import DisplayModels from '../components/DisplayModels';
import Facts from '../components/constants/Facts';
import  Hero  from '../components/constants/Hero.jsx';
import Banner from '../components/constants/Banner';
import Stats from '../components/constants/Stats';

function App() {
  return (
   <>

   <Hero />
   <DisplayModels />
   <Stats />
   <Facts/>
   <Banner />

   </>
  );
}

export default App;
