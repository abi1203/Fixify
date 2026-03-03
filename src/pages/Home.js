import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  // ✅ All const must be here (before return)
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

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* Navbar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#4f46e5",
        padding: "15px 60px",
        color: "white"
      }}>
        <h2 style={{ margin: 0 }}>Fixify</h2>

        <div>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/login")}>Signup</button>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: "40px" }}>
        {Object.keys(categories).map((category, index) => (
          <div key={index}>
            <h2>{category}</h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px"
            }}>
              {categories[category].map((tech, i) => (
                <div
                  key={i}
                  onClick={() => navigate("/login")}
                  style={{
                    border: "1px solid #ddd",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "0.3s"
                  }}
                  onMouseOver={(e) =>
                    e.currentTarget.style.transform = "scale(1.05)"
                  }
                  onMouseOut={(e) =>
                    e.currentTarget.style.transform = "scale(1)"
                  }
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    style={{ width: "70px", marginBottom: "15px" }}
                  />
                  <h4>{tech.name}</h4>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;