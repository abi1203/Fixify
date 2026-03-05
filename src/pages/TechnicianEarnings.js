import React, { useEffect, useState } from "react";

function TechnicianEarnings() {

  const [earnings, setEarnings] = useState([]);

  useEffect(() => {

    // temporary dummy data
    const data = [
      { id:1, customer:"Arun", service:"Electrician", amount:500, date:"2026-03-01" },
      { id:2, customer:"Priya", service:"Plumbing", amount:700, date:"2026-03-02" },
      { id:3, customer:"Kumar", service:"AC Repair", amount:1200, date:"2026-03-03" }
    ];

    setEarnings(data);

  }, []);

  const total = earnings.reduce((sum,e)=>sum+e.amount,0);

  return (

    <div style={{padding:"40px", background:"#f1f5f9", minHeight:"100vh"}}>

      <h1>Technician Earnings 💰</h1>

      {/* Earnings cards */}

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px",
        marginTop:"30px"
      }}>

        <div style={card}>
          <h3>Today</h3>
          <p>₹500</p>
        </div>

        <div style={card}>
          <h3>This Week</h3>
          <p>₹2200</p>
        </div>

        <div style={card}>
          <h3>Total Earnings</h3>
          <p>₹{total}</p>
        </div>

      </div>

      {/* Earnings history */}

      <h2 style={{marginTop:"40px"}}>Earnings History</h2>

      <table style={table}>

        <thead>
          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

        {earnings.map((e)=>(
          <tr key={e.id}>
            <td>{e.customer}</td>
            <td>{e.service}</td>
            <td>₹{e.amount}</td>
            <td>{e.date}</td>
          </tr>
        ))}

        </tbody>

      </table>

    </div>

  );

}

const card={
background:"white",
padding:"25px",
borderRadius:"10px",
textAlign:"center",
boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
};

const table={
width:"100%",
marginTop:"20px",
borderCollapse:"collapse"
};

export default TechnicianEarnings;