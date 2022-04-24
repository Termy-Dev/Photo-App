import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './Components/Navbar';
import PhotoEdit from './pages/PhotoEdit';
import Photos from './pages/Photos';
import { SinglePhoto } from './pages/SinglePhoto';


function App() {

  return (
    <div >
      <ResponsiveAppBar />

        <Routes>
          <Route path='home'> 
              <Route index element={<Photos/>} />
              <Route path=':id' element={<SinglePhoto />} />
          </Route>
        <Route path='edit' element={<PhotoEdit />}> </Route>
      </Routes>

    </div>
  );
}

export default App;
