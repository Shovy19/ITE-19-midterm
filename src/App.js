import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages import

import Welcome from './pages/Welcome';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import Registration from './pages/Registration';

function App() {
  return (
    
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Welcome />} />
       <Route path="/Login" element={<LoginPage />} />
       <Route path="/dashboard" element={<UserDashboard />} />
       <Route path="/Login/registration" element={<Registration />} />

      
     </Routes>
   </BrowserRouter>
 
 </>

  );
}

export default App;
