import React, { useState, useEffect } from 'react';
// import Message from './Message';
import './Reviews.css';
import PostReview from './PostReviews'
import DeleteReviw from './DeleteReviw'
import UpdateReview from './UpdateReview';

function Reviews() {

    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
        fetch ("https://hidden-hamlet-01129.herokuapp.com/Reviews")
            .then ((response) => response.json())
            .then ((reviews) => setReviews
              (reviews));
            // console.log(userReviews)
    }, []);
function addNewReview(review) {
    setReviews([...reviews, review])
}
    return (
        <div className='review' >
        <>
        <div>
            <PostReview addNewReview={addNewReview}/>
        </div>        
            <div>
                    <h1 className="row1">Your Reviews</h1>
              
                {reviews.map((review)=>(
                    <div
                    id={review.id}
                     key = {review.id}> 
                    <h1 className="row2">Name :{review.name}</h1>
                    <h1 className="row2">Message :{review.message}</h1>
                    <UpdateReview name={review.name} message={review.message} id={review.id} reviews={reviews} setReviews={setReviews}/>
               <DeleteReviw id={review.id} reviews={reviews} setReviews={setReviews}/>
                    </div>))}
                
        </div>

        </>
        </div>
    )
}
export default Reviews;