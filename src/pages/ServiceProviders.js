import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ServiceProviders() {

  const { serviceType } = useParams();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/providers/${serviceType}`)
      .then(res => res.json())
      .then(data => setProviders(data))
      .catch(err => console.log(err));
  }, [serviceType]);

  return (
    <div>
      <h2>{serviceType} Technicians</h2>

      {providers.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.phone}</p>
          <p>{p.city}</p>
        </div>
      ))}

    </div>
  );
}

export default ServiceProviders;