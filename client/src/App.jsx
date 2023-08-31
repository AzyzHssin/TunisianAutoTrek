import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Protected, SearchResults, MoreDetails, Navbar, Footer } from "./components/index";
import { useState } from "react";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Signin from "./pages/Signin";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import Signup from "./pages/Signup";
import { CarContextProvider } from './pages/CarContext.jsx';
AOS.init();

const App = () => {
    const [selectedCarId, setSelectedCarId] = useState(null); // State for selected car's ID

    const carsel=(num)=>{
      setSelectedCarId(num)
    }
  return (
    <>
      <AuthContextProvider>
        <Navbar />
      <CarContextProvider> 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search/:query" element={<SearchResults />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          ></Route>
            <Route path="/car/:id" element={<MoreDetails  />} /> 
        </Routes>
        </CarContextProvider> 
        <Footer />
      </AuthContextProvider>
    </>
  );
};

export default App;
