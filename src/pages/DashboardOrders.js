import React from "react";

function DashboardOrders(){

const orders = [
{
service:"Plumber",
date:"10 Mar",
time:"10:00 AM",
price:200,
status:"Confirmed"
},
{
service:"Electrician",
date:"12 Mar",
time:"02:00 PM",
price:250,
status:"Pending"
}
];

return(

<div style={{padding:"20px"}}>

<h2>My Orders</h2>

{orders.map((order,index)=>(

<div key={index} style={card}>

<h3>{order.service}</h3>

<p>Date: {order.date}</p>
<p>Time: {order.time}</p>
<p>Price: ₹{order.price}</p>
<p>Status: {order.status}</p>

<button style={btn}>Cancel Booking</button>

</div>

))}

{orders.length === 0 && (
<p>No orders yet 😔</p>
)}

</div>

);

}

const card={
border:"1px solid #ddd",
borderRadius:"10px",
padding:"15px",
marginBottom:"15px",
background:"white"
}

const btn={
background:"red",
color:"white",
border:"none",
padding:"6px 10px",
borderRadius:"5px",
cursor:"pointer"
}

export default DashboardOrders;