import React, { useEffect, useState } from "react";

function TechnicianBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    const data = [
      {
        id:1,
        customerName:"Arun",
        service:"Electrician",
        city:"Erode",
        date:"2026-03-01",
        status:"Pending"
      },
      {
        id:2,
        customerName:"Priya",
        service:"Plumbing",
        city:"Salem",
        date:"2026-03-02",
        status:"Ongoing"
      }
    ];

    setBookings(data);

  }, []);

  const updateStatus = (id,newStatus)=>{

    setBookings(
      bookings.map(b =>
        b.id===id ? {...b,status:newStatus} : b
      )
    );

  };

  return (

    <div style={{padding:"40px",background:"#f1f5f9",minHeight:"100vh"}}>

      <h1>My Bookings 📦</h1>

      {bookings.map((b)=>(
        <div key={b.id} style={card}>

          <h3>{b.customerName}</h3>

          <p><b>Service:</b> {b.service}</p>
          <p><b>City:</b> {b.city}</p>
          <p><b>Date:</b> {b.date}</p>

          <p>
            <b>Status:</b>
            <span style={badge(b.status)}>
              {b.status}
            </span>
          </p>

          {b.status==="Pending" && (
            <button
            onClick={()=>updateStatus(b.id,"Ongoing")}
            style={startBtn}
            >
            Start Work
            </button>
          )}

          {b.status==="Ongoing" && (
            <button
            onClick={()=>updateStatus(b.id,"Completed")}
            style={completeBtn}
            >
            Mark Completed
            </button>
          )}

        </div>
      ))}

    </div>

  );

}

const card={
background:"white",
padding:"20px",
margin:"15px 0",
borderRadius:"10px",
boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
};

const badge=(status)=>({
marginLeft:"10px",
padding:"5px 10px",
borderRadius:"5px",
background:
status==="Completed"?"green":
status==="Ongoing"?"orange":"gray",
color:"white"
});

const startBtn={
marginTop:"10px",
background:"#2563eb",
color:"white",
border:"none",
padding:"8px 15px",
borderRadius:"5px"
};

const completeBtn={
marginTop:"10px",
background:"green",
color:"white",
border:"none",
padding:"8px 15px",
borderRadius:"5px"
};

export default TechnicianBookings;