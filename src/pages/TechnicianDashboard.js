import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList, FaTools, FaMoneyBill, FaStar, FaUser } from "react-icons/fa";

function TechnicianDashboard() {

  return (

    <div style={{display:"flex"}}>

      {/* Sidebar */}

      <div style={{
        width:"250px",
        height:"100vh",
        background:"#1e293b",
        color:"white",
        padding:"20px"
      }}>

        <h2>Fixify 🔧</h2>

        <ul style={{listStyle:"none",padding:"0",marginTop:"30px"}}>

          <li style={menu}>
            <Link to="/technician/requests" style={link}>
              <FaClipboardList/> Requests
            </Link>
          </li>

          <li style={menu}>
            <Link to="/technician/bookings" style={link}>
              <FaTools/> Bookings
            </Link>
          </li>

          <li style={menu}>
            <Link to="/technician/earnings" style={link}>
              <FaMoneyBill/> Earnings
            </Link>
          </li>

          <li style={menu}>
            <Link to="/technician/ratings" style={link}>
              <FaStar/> Ratings
            </Link>
          </li>

          <li style={menu}>
            <Link to="/technician/profile" style={link}>
              <FaUser/> Profile
            </Link>
          </li>

        </ul>

      </div>


      {/* Main Dashboard */}

      <div style={{flex:1,padding:"40px",background:"#f1f5f9"}}>

        <h1>Technician Dashboard 🔧</h1>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(4,1fr)",
          gap:"20px",
          marginTop:"30px"
        }}>

          <div style={card}>
            <h3>Requests</h3>
            <p>12 New</p>
          </div>

          <div style={card}>
            <h3>Bookings</h3>
            <p>5 Active</p>
          </div>

          <div style={card}>
            <h3>Earnings</h3>
            <p>₹4500</p>
          </div>

          <div style={card}>
            <h3>Rating</h3>
            <p>⭐ 4.5</p>
          </div>

        </div>

      </div>

    </div>

  );

}

const menu = {
margin:"15px 0",
fontSize:"18px"
};

const link = {
color:"white",
textDecoration:"none",
display:"flex",
gap:"10px"
};

const card = {
background:"white",
padding:"25px",
borderRadius:"10px",
boxShadow:"0 2px 10px rgba(0,0,0,0.1)",
textAlign:"center"
};

export default TechnicianDashboard;