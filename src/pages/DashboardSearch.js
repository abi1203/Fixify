import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardSearch(){

const navigate = useNavigate();

const categories = {

  "Home Services": [
    { name: "Plumber", image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "Electrician", image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png" },
    { name: "Carpenter", image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "AC Technician", image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "Washing Machine Repair", image: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png" },
    { name: "Refrigerator Repair", image: "https://cdn-icons-png.flaticon.com/512/3050/3050155.png" },
    { name: "RO Water Purifier Technician", image: "https://cdn-icons-png.flaticon.com/512/869/869869.png" },
    { name: "Painter", image: "https://cdn-icons-png.flaticon.com/512/3096/3096673.png" },
    { name: "CCTV Installation Technician", image: "https://cdn-icons-png.flaticon.com/512/483/483408.png" },
    { name: "Solar Panel Technician", image: "https://cdn-icons-png.flaticon.com/512/4149/4149673.png" }
  ],

  "Vehicle Services": [
    { name: "Bike Mechanic", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png" },
    { name: "Car Mechanic", image: "https://cdn-icons-png.flaticon.com/512/743/743131.png" },
    { name: "Auto Electrician", image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "Car AC Repair", image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "Puncture Shop", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png" },
    { name: "Towing Service", image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" }
  ],

  "Cleaning & Maintenance": [
    { name: "House Cleaning Service", image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png" },
    { name: "Sofa Cleaning", image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png" },
    { name: "Bathroom Deep Cleaning", image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png" },
    { name: "Pest Control Technician", image: "https://cdn-icons-png.flaticon.com/512/2645/2645897.png" },
    { name: "Water Tank Cleaning", image: "https://cdn-icons-png.flaticon.com/512/869/869869.png" },
    { name: "Drainage Cleaning", image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png" }
  ],

  "Construction & Interior": [
    { name: "Mason", image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "Tiles Worker", image: "https://cdn-icons-png.flaticon.com/512/4149/4149673.png" },
    { name: "Welder", image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "POP Ceiling Worker", image: "https://cdn-icons-png.flaticon.com/512/4149/4149673.png" },
    { name: "Modular Kitchen Installer", image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png" },
    { name: "Borewell Technician", image: "https://cdn-icons-png.flaticon.com/512/869/869869.png" }
  ],

  "Electronic & Gadget Services": [
    { name: "Mobile Repair Technician", image: "https://cdn-icons-png.flaticon.com/512/597/597177.png" },
    { name: "Laptop Repair Technician", image: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
    { name: "TV Repair Technician", image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" },
    { name: "Printer Repair", image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
    { name: "Inverter Service Technician", image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" },
    { name: "Battery Service Technician", image: "https://cdn-icons-png.flaticon.com/512/3103/3103446.png" }
  ]

};

const [search,setSearch] = useState("");

/* 🔹 categories -> single services list */
const services = Object.values(categories).flat();

/* 🔹 search filter */
const filteredServices = services.filter(service =>
service.name.toLowerCase().includes(search.toLowerCase())
);

return(

<div style={{padding:"20px"}}>

<h2>Search Technician</h2>

<input
type="text"
placeholder="Search plumber, electrician..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={input}
/>

<br/><br/>

<div style={grid}>

{filteredServices.map((service,index)=>(

<div key={index} style={card}>

<img src={service.image} alt="" style={{width:"70px"}}/>

<h4>{service.name}</h4>

<button
style={btn}
onClick={()=>navigate("/booking")}
>
Book Now
</button>

</div>

))}

</div>

{filteredServices.length === 0 && (
<p>No services found 😔</p>
)}

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
padding:"20px",
textAlign:"center",
background:"white"
}

const input={
width:"100%",
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}

const btn={
background:"#4f46e5",
color:"white",
border:"none",
padding:"8px 12px",
borderRadius:"6px",
cursor:"pointer"
}

export default DashboardSearch;