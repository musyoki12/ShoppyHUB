import React, { useState, useEffect } from 'react';
import Message from './Message';


function Reviews() {

    const [reviews, setReviews] = useState([]);
  

    useEffect(() => {
        fetch ("http://localhost:9292/reviews")
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
                <input  type="text" id="username" name="username" placeholder="Enter Your Username"/>
                <input  type="text" id="comment" name="comment" placeholder="Write Your Comment" />
                <input type="submit" id="submit" value="Post Review"/>
            </form>  
        <div>
            {pageReviews}
        </div>
        </>
    )
}
export default Reviews;