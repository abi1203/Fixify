import React from "react";

function DashboardCategories(){

const categories = [

{
name:"Home Services",
icon:"🏠"
},

{
name:"Vehicle Services",
icon:"🚗"
},

{
name:"Cleaning & Maintenance",
icon:"🧹"
},

{
name:"Construction & Interior",
icon:"🏗️"
},

{
name:"Electronic & Gadget Services",
icon:"📱"
}

];

return(

<div style={{padding:"20px"}}>

<h2>Categories</h2>

<div style={grid}>

{categories.map((category,index)=>(

<div key={index} style={card}>

<span style={{fontSize:"40px"}}>{category.icon}</span>

<h4>{category.name}</h4>

</div>

))}

</div>

</div>

);

}

const grid={
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
gap:"20px"
}

const card={
border:"1px solid #ddd",
borderRadius:"10px",
padding:"30px",
textAlign:"center",
background:"white",
cursor:"pointer"
}

export default DashboardCategories;