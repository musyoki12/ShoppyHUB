import React from 'react';
import Cards from './Cards';
import { useState, useEffect} from "react";
import './Home.css'

const PRODUCTS = "https://nameless-tor-11375.herokuapp.com/products"
 function Home() {
    const[products,setProducts]= useState([]);
    
    // const[cartItems, setCartItems]= useState([])
    const productFetcher = () => {
        fetch(PRODUCTS)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                 setProducts(data)
             } )
            }
            
            
  
    // const[filtered, setFiltered]= useState([]);
    const filterItems = (categItem) =>{
        const updatedProducts = products.filter((curElem)=>{
            return curElem.category === categItem;
        } )
        setProducts(updatedProducts);
    }

        
    useEffect(
        productFetcher, []
             )
             
             let cards = products.map((product) => (<Cards image={product.image} title={product.title} price={product.price} description={product.description} category={product.category}  rate={product.rate} count={product.count} key={product.id}/>))    
    return (
    <><div className='box'>
            <button className="btn btn-secondary" onClick={()=>filterItems("PRODUCTS")}>ALL</button>
            <button className="btn btn-success"onClick={()=>filterItems("Men's")}>MEN</button>
            <button className="btn btn-danger"onClick={()=>filterItems("Women's")}>WOMEN</button>
            <button className="btn btn-danger"onClick={()=>filterItems("Jewelery")}>JEWELERY</button>
            <button className="btn btn-dark"onClick={()=>filterItems("Electronics")}>ELETRONIC</button>

        </div>
        <div className='row'>
                {cards}

                {/* <Router>
                    <Routes cartItems={cartItems}
                </Router> */}
            </div></>
        
    );
}

export default Home;