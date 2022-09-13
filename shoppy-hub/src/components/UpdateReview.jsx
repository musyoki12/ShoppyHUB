import React,{ useState} from 'react'

function UpdateReview({id,reviews,setReviews, name,message}) {
    const [updates, setUpdates]= useState(message)
    const [isHidden,setIsHidden] = useState(true)
    function handleUpdate (updates){
        const updat =reviews.map((review)=>
        review.id === updates.id ? updates:review)
        console.log(updat)
        setReviews(updat)
    }
    function handleHide (){
        setIsHidden((isHidden)=> !isHidden)
    }
    function handleChange(event){
        let newRev = event.target.value;
        console.log(newRev)
        setUpdates(newRev)
    }
  function handleSubmit(event){
    event.preventDefault()
    fetch(`https://hidden-hamlet-01129.herokuapp.com/Reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message:message
        })
    })
        .then((response) => response.json())
        .then((data)=>handleUpdate(data)
        // console.log(data)
    )
}
  return (
    
    <div >
        {isHidden ? null :
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={updates}type="text" name="message"></input>
            <input type="submit" value="save"></input>
        </form>}
         <button className="btn btn-primary" onClick={handleHide}  >Edit</button>
        </div>
  )
}

export default UpdateReview