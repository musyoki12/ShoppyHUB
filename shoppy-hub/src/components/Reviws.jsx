import React, { useState, useEffect } from 'react';
import Comment from './Comment';

function Reviews() {

    const [reviews, setReviews] = useState([]);
    // const [formData, setFormData] = useState({
    //     username: '',
    //     comment: ''
    // });

    useEffect(() => {
        fetch ("http://localhost:9292/comments")
            .then ((response) => response.json())
            .then ((reviews) => setReviews
              (reviews));
            //   console.log(userReviews)
    }, []);

    let pageReviews = reviews.map((review) => (
        <Comment key={review.id} username={review.username} comment={review.comment} />
   ));
    console.log(reviews);

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