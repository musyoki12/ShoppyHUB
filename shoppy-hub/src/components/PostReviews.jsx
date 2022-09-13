import React, { useState } from 'react';
// import Message from './Message';

function PostReviews({addNewReview}) {

    const [reviews, setReviews] = useState({
        name: "",
        message: "",
    });

    const handleChange = e => {
        setReviews({
            ...reviews,
            [e.target.name]: e.target.value
        });
    }


function handleSubmit(event){
    let reviewObj = {
        name:reviews.name,
        message:reviews.message
    }
    event.preventDefault()
    fetch("https://hidden-hamlet-01129.herokuapp.com/Reviews",{
        method:"POST",
        headers:
        {
            "Content-Type":"application/json"
        }, body: JSON.stringify(reviewObj)
    })
    .then((response) => response.json())
    .then ((review)=> {
        console.log(review)
        addNewReview(review)
    })
   setReviews ({
        name:"",
        message:""})
    
}

// const handleChange = e => {
//     setReviews({
//         ...reviews,
//         [e.target.username]: e.target.value,
//     });
// }

    return (
        <div className='review' >
        <>
       
            <form onSubmit={handleSubmit}>
                <input  type="text"  name="name" value ={reviews.name} placeholder="Enter Your Username" onChange={handleChange}/>
                <input  type="text"  name="message"  value ={reviews.message} placeholder="Write Your Message" onChange={handleChange}/>
                <input type="submit" value="Post Review"/>
            </form>
            {/* <div>
  
                    <h1>Name</h1>
                    
   
                    <h1 className="row1">Reviews</h1>

                {reviews.map((review)=>(
                    <div key = {review.id}> 
                    <p className="row2">name = {review.name}</p>
                    <p className="row2">message = {review.message}</p>
                    <button className="btn btn-primary" text='edit' id ={review.id}>Edit</button>
                <button className="btn btn-dark" text='delete' id ={review.id}>Delete</button>
                    </div>))}
      
        </div> */}

        {/* <div>

        </div> */}
        </>
        </div>
    )
}
export default PostReviews;