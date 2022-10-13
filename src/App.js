import React from 'react';
import Header from "./pages/Header.jsx";
import Hero from "./pages/Hero.jsx";
import Profile from "./pages/profile.jsx";
import Experience from "./pages/experience.jsx";
import Contactme from './pages/contactme.jsx';
import "./App.css";
import { Route, Routes} from 'react-router-dom';


function App() {

  return (  
    <>

      <Header />

      <div className='bg-white w-full scrollbar-hide'>
        <Routes>
          <Route path="/portfolio" element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact-Me" element={<Contactme />} />

        </Routes>

      </div>
    </>
  );
}

export default App;
