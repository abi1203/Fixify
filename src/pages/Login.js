import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const [role, setRole] = useState("user");

const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState("");
const [errors, setErrors] = useState({});

const [form, setForm] = useState({
email: "",
password: ""
});

// gradient animation
useEffect(() => {
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`       @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `, styleSheet.cssRules.length);
}, []);

const handleChange = (e) => {


const { name, value } = e.target;

setForm({ ...form, [name]: value });

validateField(name, value);


};

const validateField = (name, value) => {

let errorMsg = "";

if (name === "email") {

  if (!value.trim()) {
    errorMsg = "Email required";
  }

}

if (name === "password") {

  if (value.length < 6) {
    errorMsg = "Min 6 characters required";
  }

}

setErrors((prev) => ({
  ...prev,
  [name]: errorMsg
}));


};

const handleSubmit = async () => {


try {

  let url = "";

  if(role === "user"){
    url = "http://localhost:8086/users/login";
  }else{
    url = "http://localhost:8086/providers/login";
  }

  const response = await fetch(url,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email: form.email,
      password: form.password
    })
  });

  if(!response.ok){
    throw new Error("Invalid Credentials");
  }

  const data = await response.json();

  localStorage.setItem("isAuth","true");
  localStorage.setItem("user",JSON.stringify(data));

  setMessage("Login Successful ✅");
  setMessageType("success");

  setTimeout(()=>{

    if(role==="user"){
      navigate("/Dashboard");
    }else{
      navigate("/technician-dashboard");
    }

  },1500);

} catch(error){

  setMessage("Invalid Credentials ❌");
  setMessageType("error");

}


};

const renderInput = (name, placeholder, type = "text") => (


<div style={{ marginBottom: "15px", position: "relative" }}>

  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={form[name]}
    onChange={handleChange}
    style={{
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: errors[name]
        ? "2px solid red"
        : form[name]
        ? "2px solid green"
        : "2px solid #ccc",
      outline: "none"
    }}
  />

  {form[name] && !errors[name] && (

    <span
      style={{
        position: "absolute",
        right: "10px",
        top: "10px",
        color: "green",
        fontWeight: "bold"
      }}
    >
      ✓
    </span>

  )}

  {errors[name] && (

    <small style={{ color: "red" }}>
      {errors[name]}
    </small>

  )}

</div>


);

return (


<div style={outerStyle}>

  <div style={cardStyle}>

    <h1 style={{ textAlign: "center", color: "#8d63ff" }}>
      Fixify 🔧
    </h1>

    {message && (

      <div
        style={{
          marginBottom: "15px",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor:
            messageType === "success"
              ? "#d4edda"
              : "#f8d7da",
          color:
            messageType === "success"
              ? "#155724"
              : "#721c24"
        }}
      >

        {message}

      </div>

    )}

    {/* Login / Signup Buttons */}

    <div
      style={{
        textAlign: "center",
        marginBottom: "20px"
      }}
    >

      <button
        style={toggleBtn(true)}
      >
        Login
      </button>

      <button
        onClick={() => navigate("/signup")}
        style={toggleBtn(false)}
      >
        Signup
      </button>

    </div>

    {/* Role Selection */}

    <div style={{marginBottom:"15px",textAlign:"center"}}>

      <label style={{marginRight:"20px"}}>
        <input
          type="radio"
          value="user"
          checked={role==="user"}
          onChange={()=>setRole("user")}
        />
        User
      </label>

      <label>
        <input
          type="radio"
          value="technician"
          checked={role==="technician"}
          onChange={()=>setRole("technician")}
        />
        Technician
      </label>

    </div>

    {renderInput("email", "Email", "email")}

    {renderInput("password", "Password", "password")}

    <button
      onClick={handleSubmit}
      style={mainBtn}
    >
      Login
    </button>

  </div>

</div>


);

}

const outerStyle = {
height: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background:
"linear-gradient(-45deg, #1e3c72, #2a5298, #00c6ff, #0072ff)",
backgroundSize: "400% 400%",
animation: "gradientMove 4s ease forwards"
};

const cardStyle = {
width: "350px",
padding: "30px",
background: "aqua",
borderRadius: "15px",
boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
};

const mainBtn = {
width: "100%",
padding: "12px",
background: "#6C63FF",
color: "white",
border: "none",
borderRadius: "8px",
cursor: "pointer",
fontSize: "15px",
marginTop: "10px"
};

const toggleBtn = (active) => ({
padding: "8px 18px",
margin: "0 5px",
background: active ? "#6C63FF" : "#ddd",
color: active ? "white" : "black",
border: "none",
borderRadius: "20px",
cursor: "pointer"
});

export default Login;
