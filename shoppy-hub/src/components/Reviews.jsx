import React, { useState, useEffect } from 'react';
import Message from './Message';
import './Reviews.css';

function Reviews() {

    const [reviews, setReviews] = useState([]);
  

    useEffect(() => {
        fetch ("https://hidden-hamlet-01129.herokuapp.com/Reviews")
            .then ((response) => response.json())
            .then ((reviews) => setReviews
              (reviews));
            //   console.log(userReviews)
    }, []);

    let pageReviews = reviews.map((review) => (
        <Message key={review.id} name={review.name} message={review.message} />
   ));
    console.log(reviews);

    
    
    return (
        <>
            <form >
                <input  type="text" id="name" name="name" placeholder="Enter Your Username"/>
                <input  type="text" id="message" name="message" placeholder="Write Your Message" />
                <input type="submit" id="submit" value="Post Review"/>
            </form>  
        <div>
            {pageReviews}
        </div>
        </>
    )
}
export default Reviews;