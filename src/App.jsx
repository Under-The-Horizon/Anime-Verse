import { useState } from 'react'
import Test from './pages/Test.jsx';
import './App.css'
import * as React from "react";
import { createRoot } from "react-dom/client";
import Main from './pages/Main';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className='App h-screen overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>} />
          <Route path='/' element={<Main/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
