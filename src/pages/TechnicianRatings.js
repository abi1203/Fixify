import React, { useEffect, useState } from "react";

function TechnicianRatings(){

const [reviews,setReviews] = useState([]);

useEffect(()=>{

const data = [
  {
    id:1,
    customer:"Arun",
    rating:4,
    comment:"Good service and quick repair"
  },
  {
    id:2,
    customer:"Priya",
    rating:5,
    comment:"Excellent work. Very professional"
  },
  {
    id:3,
    customer:"Kumar",
    rating:3,
    comment:"Work completed but took time"
  }
];

setReviews(data);

},[]);

const average =
reviews.reduce((sum,r)=>sum+r.rating,0) / reviews.length;

const renderStars = (num)=>{
return "⭐".repeat(num);
};

return(

<div style={{padding:"40px",background:"#f1f5f9",minHeight:"100vh"}}>

<h1>Customer Ratings ⭐</h1>

{/* Average Rating */}

<div style={card}>
<h2>{average.toFixed(1)} ⭐</h2>
<p>Average Rating</p>
</div>

{/* Reviews */}

<h2 style={{marginTop:"30px"}}>Customer Reviews</h2>

{reviews.map((r)=>(
<div key={r.id} style={reviewCard}>

<h3>{r.customer}</h3>

<p>{renderStars(r.rating)}</p>

<p>{r.comment}</p>

</div>
))}

</div>

)

}

const card={
background:"white",
padding:"25px",
borderRadius:"10px",
width:"200px",
textAlign:"center",
boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
};

const reviewCard={
background:"white",
padding:"20px",
margin:"10px 0",
borderRadius:"8px",
boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
};

export default TechnicianRatings;