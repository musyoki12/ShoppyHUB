import React, { useState, useEffect } from 'react';
import Request from './Request';

function Requests() {

    const [requests, setRequests] = useState([]);


    useEffect(() => {
        fetch ("http://localhost:9292/requests")
            .then ((response) => response.json())
            .then ((requests) => setRequests
              (Requests));
            //  console.log(requests)
    }, []);

    let pageRequest = requests.map((requests) => (
        <Request key={requests.id} name={requests.name} description={requests.description} quantity={requests.quantity} />
   ));
    console.log(requests);

    return (
        <>
            <form >
                <input  type="text" id="username" name="name" placeholder="Enter The Name of The Product"/>
                <input  type="text" id="description" name="description" placeholder="Enter The Description of The Product" />
                <input  type="text" id="quantity" name="quantity" placeholder="Entre The Quantity" />
                <input type="submit" id="submit" value="Post Review"/>
            </form>  
        <div>
            {pageRequest}
        </div>
        </>
    )
 }
export default Requests;