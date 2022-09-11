import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import {useState}from 'react';
import Navbar from './components/Navabar';
import comments from './components/Comments';
import Request from ' ./components/Requests';
// import Navigation from './components/Navigation';

import { BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  const[products,setProducts]= useState([]);
  // const[cartItems, setCartItems]=useState([])
  
  return (
    <div className="App">
      <Router>
        
       <Header/>
       <Navbar/>
       <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/UserReviews" element={<reviews />}></Route>
              <Route exact path="/UserReviews" element={<requests />}></Route>
       </Routes>
       </Router>
       <Home airbnbs={products} setAirbnbs = {setProducts}/>
      <Footer/>
      
    </div>
  );
}

export default App;