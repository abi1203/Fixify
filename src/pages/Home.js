import { useNavigate } from "react-router-dom";

function Home(){

const navigate = useNavigate();

  // 🔹 All Services
  const services = [

    { name: "Plumber", price: 200, image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "Electrician", price: 250, image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png" },
    { name: "Carpenter", price: 220, image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "AC Technician", price: 300, image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "Washing Machine Repair", price: 280, image: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png" },
    { name: "Refrigerator Repair", price: 320, image: "https://cdn-icons-png.flaticon.com/512/3050/3050155.png" },
    { name: "RO Water Purifier Technician", price: 260, image: "https://cdn-icons-png.flaticon.com/512/869/869869.png" },
    { name: "CCTV Installation Technician", price: 500, image: "https://cdn-icons-png.flaticon.com/512/483/483408.png" },
    { name: "Solar Panel Technician", price: 600, image: "https://cdn-icons-png.flaticon.com/512/4149/4149673.png" },

    { name: "Bike Mechanic", price: 150, image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png" },
    { name: "Car Mechanic", price: 350, image: "https://cdn-icons-png.flaticon.com/512/743/743131.png" },
    { name: "Auto Electrician", price: 300, image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "Car AC Repair", price: 450, image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "Puncture Shop", price: 100, image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png" },
    { name: "Towing Service", price: 800, image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },

    { name: "House Cleaning Service", price: 700, image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png" },
    { name: "Sofa Cleaning", price: 500, image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png" },
    { name: "Bathroom Deep Cleaning", price: 400, image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png" },
    { name: "Pest Control Technician", price: 900, image: "https://cdn-icons-png.flaticon.com/512/2645/2645897.png" },
    { name: "Water Tank Cleaning", price: 600, image: "https://cdn-icons-png.flaticon.com/512/869/869869.png" },
    { name: "Drainage Cleaning", price: 550, image: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png" },

    { name: "Mason", price: 800, image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "Tiles Worker", price: 750, image: "https://cdn-icons-png.flaticon.com/512/4149/4149673.png" },
    { name: "Welder", price: 650, image: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png" },
    { name: "POP Ceiling Worker", price: 900, image: "https://cdn-icons-png.flaticon.com/512/4149/4149673.png" },
    { name: "Modular Kitchen Installer", price: 1200, image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png" },
    { name: "Borewell Technician", price: 1500, image: "https://cdn-icons-png.flaticon.com/512/869/869869.png" },

    { name: "Mobile Repair Technician", price: 300, image: "https://cdn-icons-png.flaticon.com/512/597/597177.png" },
    { name: "Laptop Repair Technician", price: 500, image: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
    { name: "TV Repair Technician", price: 450, image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" },
    { name: "Printer Repair", price: 350, image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
    { name: "Inverter Service Technician", price: 600, image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" },
    { name: "Battery Service Technician", price: 400, image: "https://cdn-icons-png.flaticon.com/512/3103/3103446.png" }

  ];

return(

<div style={{fontFamily:"Arial"}}>

{/* NAVBAR */}

<div style={{

display:"flex",
justifyContent:"space-between",
alignItems:"center",
background:"#4f46e5",
padding:"15px 60px",
color:"white"

}}>

<h2 style={{margin:0}}>Fixify 🔧</h2>

<div style={{display:"flex",gap:"10px"}}>

<button
onClick={()=>navigate("/login")}
style={{

padding:"8px 20px",
borderRadius:"25px",
border:"2px solid white",
background:"transparent",
color:"white",
cursor:"pointer",
fontWeight:"500"

}}
>
Login
</button>

<button
onClick={()=>navigate("/signup")}
style={{

padding:"8px 22px",
borderRadius:"25px",
border:"none",
background:"white",
color:"#4f46e5",
cursor:"pointer",
fontWeight:"600"

}}
>
Sign Up
</button>

</div>

</div>


{/* SERVICES GRID */}

<div style={{padding:"40px"}}>

<h2 style={{textAlign:"center",marginBottom:"30px"}}>
Book a Service 🔧
</h2>

<div style={{

display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"25px"

}}>

{services.map((service,index)=>(

<div
key={index}

style={{

border:"1px solid #ddd",
borderRadius:"12px",
padding:"20px",
textAlign:"center",
background:"white",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
cursor:"pointer"

}}

onClick={()=>navigate("/login")}

>

<img
src={service.image}
alt={service.name}
style={{
width:"70px",
height:"70px",
objectFit:"contain",
marginBottom:"10px"
}}
/>

<h4>{service.name}</h4>

<p>₹{service.price}</p>

</div>

))}

</div>

</div>

</div>

);

}

export default Home;