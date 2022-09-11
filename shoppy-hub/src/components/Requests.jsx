import React, { useState, useEffect } from 'react';
import Request from './Request';

function Requests() {

    const [requests, setRequests] = useState([]);
    // const [formData, setFormData] = useState({
    //     username: '',
    //     comment: ''
    // });

    useEffect(() => {
        fetch ("http://localhost:9292/requests")
            .then ((response) => response.json())
            .then ((requests) => setRequests
              (Requests));
            //   console.log(userReviews)
    }, []);

    let pageRequest = requests.map((requests) => (
        <Request key={requests.id} name={requests.name} description={requests.description} quantity={requests.quantity} />
   ));
    console.log(requests);

    // function handleNewUserReview(e) {
    //     e.preventDefault();

    //     fetch("http://localhost:9292/comments",{
    //         method: "POST",
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             username: formData.username,
    //             comment: formData.comment
    //         }),
    //     })
    //      .then ((response) => response.json())
    //      .then((newReviewData) => {
    //             console.log(newReviewData)
    //      }); 
    // }
    // const handleChange = e => {
    //     setFormData({
    //         ...formData,
    //         [e.target.username]: e.target.value,
    //     });
    
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