import {Route , Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected'; 
import Home from './pages/Home';
import Account from './pages/Account';
import Signin from './pages/Signin';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import './App.css';


AOS.init();


function App() {

  return (
   <>
 <AuthContextProvider>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/signin' element={<Signin />}></Route>
    <Route path='/account' element={
    <Protected>
      <Account />
      </Protected>}>
      </Route>
 </Routes>
</AuthContextProvider>
   </>
  );
}

export default App;
