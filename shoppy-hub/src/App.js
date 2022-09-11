import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import {useState}from 'react';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Requests from './components/Requests'
// import Navigation from './components/Navigation';

import { BrowserRouter as Switch,Route,Routes} from "react-router-dom";
// import { Switch, Routes, Route } from 'react-router-dom'
// import { Switch } from '@mui/material';


function App() {
  const[products,setProducts]= useState([]);
  // const[cartItems, setCartItems]=useState([])
  
  return (
    <div className="App">
      <Switch>
        <Header/>
        <div>
       <Navbar/>
       </div>
       <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/Reviews" element={<Reviews/>}></Route>
              <Route exact path="/Requests" element={<Requests />}></Route>
       </Routes>
       
       {/* <Home airbnbs={products} setAirbnbs = {setProducts}/> */}
      <Footer/>
      </Switch>
    </div>
  );
}

export default App;