import { useState } from "react";
import Home from "./Home";

function Dashboard(){

const [activeTab,setActiveTab] = useState("home");

return(

<div style={{paddingBottom:"70px"}}>

<h2 style={{textAlign:"center"}}>Fixify Dashboard 🔧</h2>

{/* CONTENT AREA */}

{activeTab === "home" && (
<Home />
)}

{activeTab === "search" && (

<div style={{padding:"20px"}}>

<h3>Search Technician</h3>

<input
placeholder="Search plumber, electrician..."
style={{padding:"10px",width:"100%"}}
/>

</div>

)}

{activeTab === "categories" && (

<div style={{padding:"20px"}}>

<h3>Categories</h3>

<p>🏠 Home Services</p>
<p>🚗 Vehicle Services</p>
<p>🧹 Cleaning</p>
<p>📺 Electronics Repair</p>

</div>

)}

{activeTab === "orders" && (

<div style={{padding:"20px"}}>

<h3>My Orders</h3>

<p>No orders yet</p>

</div>

)}

{/* BOTTOM NAVBAR */}

<div style={{

position:"fixed",
bottom:"0",
left:"0",
width:"100%",
display:"flex",
justifyContent:"space-around",
background:"white",
borderTop:"1px solid #ccc",
padding:"10px"

}}>

<button onClick={()=>setActiveTab("home")}>🏠 Home</button>

<button onClick={()=>setActiveTab("search")}>🔍 Search</button>

<button onClick={()=>setActiveTab("categories")}>📂 Categories</button>

<button onClick={()=>setActiveTab("orders")}>📦 Orders</button>

</div>

</div>

);

}

export default Dashboard;