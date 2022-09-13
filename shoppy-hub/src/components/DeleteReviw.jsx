import React from 'react'

function DeleteReviw({id,reviews,setReviews}) {
        function handleDelete(){
        //  let id= event.target.id;
            // fetch(`https://hidden-hamlet-01129.herokuapp.com/Reviews/${id}`,{
            //     method:"DELETE"
            // })
            // .then((response)=>response.json())
            // // .then(deletedReview=>onRemove(deletedReview))
            // .then(()=>{
            //    console.log(setReviews(reviews.filter(review=>review.id !== id)))
            // })
            fetch(`https://hidden-hamlet-01129.herokuapp.com/Reviews/${id}`,{
                    method:"DELETE"
                })
                .then((response)=>response.json())
                .then(()=>{
                    let deleteData =reviews.filter(review=>review.id !== id)
                    setReviews(deleteData)
                }


                )
               

        }
        // console.log(id)
        // function onRemove (deletedReview){
        //     setReviews(reviews.filter(review=>review.id!==deletedReview.id))
        //     setOnRemove(()=>!remove)
  return (
    <div>
         <button className="btn btn-dark" onClick={handleDelete} >Delete</button>
        </div>
  )
}

export default DeleteReviw;