import React from "react";
import './Cards.css'
// import { Alert } from 'react-alert'




function Cards({image,title, price, description, category, rate, count,onAddToCart, countInCart}) {
//     const handleAddProduct =()=>{
//         const ProductExist = cartItems.find((items)=>items.id === cards.id);
//         if(ProductExist){
//             setCartItems(cartItems.map((item)=>item.id === cards.id?
//             {...ProductExist,quantity:ProductExist.quantity + 1}:item))
//     }
//     else
//     {setCartItems([...cartItems, { ...ProductExist,quantity:ProductExist.quantity + 1}])
// }
function myFunction() {
    alert("Hello Customer your Product has been added to the cart");
  }
            
    return (
              <div className="col">
        <div className='card' style={{width: 18 + 'rem'}}>
        <img src={image} alt=""className="image"/>
            <div className="card-body"></div>
            <div className="card__info">
                <h2>Title:{title}</h2>
                <h4>Price:{price}</h4>
                <h4>Description:{description}</h4>
                <h4>Catgory:{category}</h4>
                <h4>Rating:{rate}</h4>
                <h4>Count:{count}</h4>
                <div>
                <button onClick={myFunction} >Add to Cart</button>
                </div>
            </div>
        </div>
        </div>
    
    )
}


export default Cards;

