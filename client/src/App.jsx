import './App.css';
import {Route , Routes } from 'react-router-dom'
import Home from './pages/Home';
import 'aos/dist/aos.css'; 
import AOS from 'aos';


AOS.init();


function App() {
  return (
   <>

   <Routes>
    <Route path='/' element={<Home />}></Route>
    
{/*       <Route path='/product' element={<CarModels />}></Route>
 */}   </Routes>

   </>
  );
}

export default App;
