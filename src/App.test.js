import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ServiceProviders() {

  const { serviceType } = useParams();

  const [providers, setProviders] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:8086/providers/${serviceType}`)
      .then(res => res.json())
      .then(data => setProviders(data))
      .catch(err => console.log(err));

  }, [serviceType]);


  return (

    <div style={{padding:"40px"}}>

      <h2>{serviceType} Technicians 🔧</h2>

      {providers.length === 0 && (
        <p>No technicians available</p>
      )}

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px",
        marginTop:"30px"
      }}>

        {providers.map((p) => (

          <div key={p.id}
          style={{
            border:"1px solid #ddd",
            borderRadius:"10px",
            padding:"20px",
            background:"white",
            boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
          }}>

            <h3>{p.name}</h3>

            <p>📍 {p.city}</p>

            <p>⭐ Rating: {p.rating}</p>

            <p>💼 Experience: {p.experience} years</p>

            <p>📞 {p.phone}</p>

            <button
            style={{
              background:"green",
              color:"white",
              border:"none",
              padding:"10px 15px",
              borderRadius:"5px",
              cursor:"pointer"
            }}

            onClick={() => {

              fetch("http://localhost:8086/bookings",{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify({
                  technicianId:p.id,
                  technicianName:p.name,
                  service:serviceType,
                  city:p.city
                })
              })
              .then(res=>res.json())
              .then(()=>{
                alert("Booking Confirmed 🎉")
              })

            }}

            >
            Book Now
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default ServiceProviders;