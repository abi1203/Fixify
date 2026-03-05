
  import { useState } from "react";
 import { useLocation } from "react-router-dom";

function Booking() {

  // 🔹 State Section
  const [selectedService, setSelectedService] = useState(null);
    const location = useLocation();
 const provider = location.state;
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

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

  // 🔹 Address Validation
  const validateAddress = () => {

    if (!address.trim()) {
      setAddressError("Address is required");
      return false;
    }

    if (address.trim().length < 10) {
      setAddressError("Address must be at least 10 characters");
      return false;
    }

    if (/^[0-9\s]+$/.test(address)) {
      setAddressError("Address cannot be only numbers");
      return false;
    }

    setAddressError("");
    return true;
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      <h2>Book a Service 🔧</h2>
      {provider && (
  <div style={{marginTop:"20px"}}>
    <h3>Technician Details</h3>
    <p>Name: {provider.name}</p>
    <p>City: {provider.city}</p>
    <p>Service: {provider.serviceType}</p>
  </div>
)}

      {/* Service Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelectedService(service)}
            style={{
              border: selectedService?.name === service.name
                ? "2px solid green"
                : "1px solid #ccc",
              padding: "20px",
              borderRadius: "12px",
              cursor: "pointer",
              backgroundColor: "white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}
          >
           <div style={{
  width: "70px",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 10px auto"
}}>
  <img
    src={service.image}
    alt={service.name}
    style={{
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain"
    }}
  />
</div>
            <h4>{service.name}</h4>
            <p>₹{service.price}</p>
          </div>
        ))}
      </div>

      {/* Selected */}
      {selectedService && (
        <div style={{ marginTop: "30px" }}>
          <h3>Selected: {selectedService.name}</h3>
          <h4>Total: ₹{selectedService.price}</h4>
        </div>
      )}

      <br />

      {/* Address Input */}
      <input
        type="text"
        placeholder="Enter your full address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          border: addressError
            ? "2px solid red"
            : address.length > 0
            ? "2px solid green"
            : "1px solid gray",
          borderRadius: "5px"
        }}
      />

      {addressError && (
        <p style={{ color: "red" }}>{addressError}</p>
      )}

      <br /><br />

      <button
        style={{
          padding: "10px 25px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        onClick={() => {

          if (!selectedService) {
            alert("Select a service first");
            return;
          }

          if (!validateAddress()) return;

          alert("Booking Confirmed 🎉");

        }}
      >
        Confirm Booking
      </button>

    </div>
  );
}

export default Booking;