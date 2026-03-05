import React, { useState, useEffect } from "react";

function TechnicianRequests() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {

    const data = [
      {id:1, customerName:"Arun", service:"Electrician", city:"Erode", status:"Pending"},
      {id:2, customerName:"Priya", service:"Plumbing", city:"Salem", status:"Pending"}
    ];

    setRequests(data);

  }, []);

  const acceptRequest = (id) => {

    setRequests(
      requests.map(r =>
        r.id === id ? {...r, status:"Accepted"} : r
      )
    );

  };

  const rejectRequest = (id) => {

    setRequests(
      requests.map(r =>
        r.id === id ? {...r, status:"Rejected"} : r
      )
    );

  };

  return (

    <div style={{padding:"40px"}}>

      <h1>Service Requests 🔔</h1>

      {requests.map((r)=>(
        <div key={r.id} style={card}>

          <h3>{r.customerName}</h3>

          <p><b>Service:</b> {r.service}</p>
          <p><b>City:</b> {r.city}</p>

          <p>Status:
            <span style={badge(r.status)}>
              {r.status}
            </span>
          </p>

          {r.status==="Pending" && (
            <>
              <button onClick={()=>acceptRequest(r.id)} style={accept}>
                Accept
              </button>

              <button onClick={()=>rejectRequest(r.id)} style={reject}>
                Reject
              </button>
            </>
          )}

        </div>
      ))}

    </div>

  );

}

const card={
border:"1px solid #ddd",
padding:"20px",
margin:"10px",
borderRadius:"8px",
background:"#fff"
};

const badge=(status)=>({
marginLeft:"10px",
padding:"5px 10px",
borderRadius:"5px",
background:
status==="Accepted"?"green":
status==="Rejected"?"red":"orange",
color:"white"
});

const accept={
marginRight:"10px",
background:"green",
color:"white",
border:"none",
padding:"8px 15px"
};

const reject={
background:"red",
color:"white",
border:"none",
padding:"8px 15px"
};

export default TechnicianRequests;