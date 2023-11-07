import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages import

import Welcome from './pages/Welcome';

function App() {
  return (
    
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Welcome />} />
      
     </Routes>
   </BrowserRouter>
 
 </>

  );
}

export default App;
