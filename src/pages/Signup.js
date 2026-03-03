import { useState } from "react";

function Signup() {

const [role, setRole] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    workType: "",
    experience: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {

    if (!role) {
      alert("Please select User or Technician");
      return;
    }

    if (role === "user") {

      if (!form.name || !form.email || !form.password) {
        alert("Fill all user fields");
        return;
      }

      localStorage.setItem("user", JSON.stringify(form));
      alert("User Signup Successful 👤");

    } else {

      if (
        !form.name ||
        !form.mobile ||
        !form.workType ||
        !form.experience ||
        !form.email ||
        !form.password
      ) {
        alert("Fill all technician fields");
        return;
      }

      localStorage.setItem("technician", JSON.stringify(form));
      alert("Technician Signup Successful 🔧");
    }
  };

  return (
    <div style={container}>

      <div style={card}>

        <h2>Create Account 📝</h2>

        {/* ROLE SELECTION */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Role</option>
          <option value="user">Signup as User 👤</option>
          <option value="technician">Signup as Technician 🔧</option>
        </select>

        <br /><br />

        {/* COMMON FIELD */}
        {role && (
          <>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              style={inputStyle}
            />
            <br /><br />
          </>
        )}

        {/* USER FIELDS */}
        {role === "user" && (
          <>
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              style={inputStyle}
            />
            <br /><br />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              style={inputStyle}
            />
            <br /><br />
          </>
        )}

        {/* TECHNICIAN FIELDS */}
        {role === "technician" && (
          <>
            <input
              name="mobile"
              placeholder="Mobile Number"
              onChange={handleChange}
              style={inputStyle}
            />
            <br /><br />

            <input
              name="workType"
              placeholder="Work Type (Plumber, AC, etc)"
              onChange={handleChange}
              style={inputStyle}
            />
            <br /><br />

            <input
              name="experience"
              placeholder="Experience (Years)"
              onChange={handleChange}
              style={inputStyle}
            />
            <br /><br />

            <input
              name="location"
              placeholder="Work Location"
              onChange={handleChange}
              style={inputStyle}
            />
            <br /><br />

            <input
              name="email"
              placeholder="User ID / Email"
              onChange={handleChange}
              style={inputStyle}
            />
            <br /><br />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              style={inputStyle}
            />
            <br /><br />
          </>
        )}

        {role && (
          <button style={btnStyle} onClick={handleSubmit}>
            Signup
          </button>
        )}

      </div>
    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to right, #4f46e5, #06b6d4)"
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "center",
  width: "350px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
};

const inputStyle = {
  padding: "10px",
  width: "250px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const btnStyle = {
  padding: "10px 20px",
  backgroundColor: "#4f46e5",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Signup;