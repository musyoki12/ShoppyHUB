import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import {useState}from 'react';
// import Navigation from './components/Navigation';

import { BrowserRouter as Router} from "react-router-dom";


function App() {
  const[products,setProducts]= useState([]);
  // const[cartItems, setCartItems]=useState([])
  
  return (
    <div className="App">
      <Router>
        
       <Header/>
       {/* <Navigation/> */}
       </Router>
       <Home airbnbs={products} setAirbnbs = {setProducts}/>
      <Footer/>
    </div>
  );
}

export default App;