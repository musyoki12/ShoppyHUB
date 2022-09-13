import React, { useState, useEffect } from 'react';
// import Message from './Message';
import './Reviews.css';
import PostReview from './PostReview'

function Reviews() {

    const [reviews, setReviews] = useState([]);

  

    // fetch ("https://hidden-hamlet-01129.herokuapp.com/Reviews")

    useEffect(() => {
        fetch ("https://hidden-hamlet-01129.herokuapp.com/Reviews")
            .then ((response) => response.json())
            .then ((reviews) => setReviews
              (reviews));
            //   console.log(userReviews)
    }, []);

    

    // useEffect(() => {
    //     fetch("http://localhost:9292/reviews")
    //     .then((response) =>response.json())
    //     .then((reviews) =>setReviews(reviews) );
    // }, []);

// function handleSubmit(event){
//     event.preventDefault()
//     fetch("https://hidden-hamlet-01129.herokuapp.com/Reviews",{
//         method:"POST",
//         headers:
//         {
//             "Content-Type":"application/json"
//         }, body: JSON.stringify(reviews)
//     })
//     .then(response => response.json())
//     .then (review=> console.log(review))
// }
// function handleChange(event){
//     setReviews({...reviews, [event.target.name]:event.target.value})
// }
// const handleChange = e => {
//     setReviews({
//         ...reviews,
//         [e.target.username]: e.target.value,
//     });
// }
function addNewReview(review) {
    setReviews([...reviews, review])
}

    return (
        <div className='review' >
        <>
        <div>
            <PostReview addNewReview={addNewReview}/>
        </div>
            {/* <form className='form' onSubmit={handleSubmit}>
                <input  type="text" id="name" name="name" onplaceholder="Enter Your Username"/>
                <input  type="text" id="message" name="message" onChange={handleChange} placeholder="Write Your Message" />
                <input type="submit" id="submit"  value="Post Review"/>
            </form>  */}
            {/* <form onSubmit={handleSubmit}>
                <input  type="text"  name="username" placeholder="Enter Your Username" onChange={handleChange}/>
                <input  type="text"  name="comment" placeholder="Write Your Message" onChange={handleChange}/>
                <input type="submit" value="Post Review"/>
            </form> */}
            <div>
         
           
              
                    <h1>Name</h1>
                    
   
                    <h1 className="row1">Reviews</h1>
              

                
                {reviews.map((review)=>(
                    <div key = {review.id}> 
                    <p className="row2">name = {review.name}</p>
                    <p className="row2">message = {review.message}</p>
                    <button className="btn btn-primary" text='edit' id ={review.id}>Edit</button>
                <button className="btn btn-dark" text='delete' id ={review.id}>Delete</button>
                    </div>))}
                
                
              
                
                
        </div>

       
        </>
        </div>
    )
}
export default Reviews;