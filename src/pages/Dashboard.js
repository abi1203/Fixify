import { useState } from "react";
import DashboardHome from "./Dashboardhome";
import DashboardSearch from "./DashboardSearch";
import DashboardCategories from "./DashboardCategories";
import DashboardOrders from "./DashboardOrders";

function Dashboard(){

const [activeTab,setActiveTab] = useState("home");

return(

<div style={{paddingBottom:"80px"}}>

<h2 style={{textAlign:"center"}}>Fixify Dashboard 🔧</h2>

{/* CONTENT AREA */}

{activeTab === "home" && <DashboardHome />}

{activeTab === "search" && <DashboardSearch />}

{activeTab === "categories" && <DashboardCategories />}

{activeTab === "orders" && <DashboardOrders />}

{/* BOTTOM NAVBAR */}

<div style={bottomNav}>

<button style={navBtn} onClick={()=>setActiveTab("home")}>
<span style={{fontSize:"22px"}}>🏠</span>
<p style={{margin:"2px 0"}}>Home</p>
</button>

<button style={navBtn} onClick={()=>setActiveTab("search")}>
<span style={{fontSize:"22px"}}>🔍</span>
<p style={{margin:"2px 0"}}>Search</p>
</button>

<button style={navBtn} onClick={()=>setActiveTab("categories")}>
<span style={{fontSize:"22px"}}>📂</span>
<p style={{margin:"2px 0"}}>Categories</p>
</button>

<button style={navBtn} onClick={()=>setActiveTab("orders")}>
<span style={{fontSize:"22px"}}>📦</span>
<p style={{margin:"2px 0"}}>Orders</p>
</button>

</div>

</div>

);

}

const bottomNav = {
position:"fixed",
bottom:"0",
left:"0",
width:"100%",
background:"white",
borderTop:"1px solid #ddd",
display:"flex",
justifyContent:"space-around",
padding:"8px 0",
boxShadow:"0 -2px 10px rgba(0,0,0,0.1)"
}

const navBtn = {
display:"flex",
flexDirection:"column",
alignItems:"center",
background:"none",
border:"none",
cursor:"pointer",
fontSize:"14px",
color:"#333"
}

export default Dashboard;