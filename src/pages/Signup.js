import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Signup() {
const navigate = useNavigate();
  const [role,setRole] = useState("");

  const [form,setForm] = useState({
    name:"",
    dob:"",
    address:"",
    mobile:"",
    workType:"",
    experience:"",
    location:"",
    email:"",
    password:"",
    confirmPassword:"",
    captchaInput:""
  });

  const [captcha] = useState(
  Math.random().toString(36).substring(2,7)
);

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = ()=>{

    if(role===""){
      alert("Please select role");
      return;
    }

    if(!/^[A-Za-z ]{3,}$/.test(form.name)){
      alert("Enter valid name");
      return;
    }

    if(form.password.length<6){
      alert("Password must be 6 characters");
      return;
    }

    if(form.password!==form.confirmPassword){
      alert("Passwords do not match");
      return;
    }

    if(form.captchaInput!==captcha){
      alert("Captcha incorrect");
      return;
    }

    if(role==="user"){

      if(!form.dob){
        alert("Select DOB");
        return;
      }

      if(!form.address){
        alert("Enter address");
        return;
      }

      localStorage.setItem("user",JSON.stringify(form));
      alert("User Signup Successful 👤");
navigate("/dashboard");

    }

    if(role==="technician"){

      if(!/^[0-9]{10}$/.test(form.mobile)){
        alert("Mobile must be 10 digits");
        return;
      }

      if(!form.workType){
        alert("Enter work type");
        return;
      }

      if(!form.experience){
        alert("Enter experience");
        return;
      }

      if(!form.location){
        alert("Enter location");
        return;
      }

      if(!/^\S+@\S+\.\S+$/.test(form.email)){
        alert("Invalid email");
        return;
      }

      localStorage.setItem("technician",JSON.stringify(form));
     
      alert("Technician Signup Successful 🔧");
navigate("/dashboard");

setTimeout(() => {
  navigate("/dashboard");
}, 1000);

    }

  };

  return(

    <div style={container}>

      <div style={card}>

        <h2>Signup</h2>

        {/* ROLE SELECT */}

        <select
        value={role}
        onChange={(e)=>setRole(e.target.value)}
        style={input}
        >

        <option value="">Select Role</option>
        <option value="user">User 👤</option>
        <option value="technician">Technician 🔧</option>

        </select>

        <br/><br/>

        {role && (

        <>
        <input name="name" placeholder="Full Name" onChange={handleChange} style={input}/>
        <br/><br/>
        </>

        )}

        {/* USER FORM */}

        {role==="user" && (

        <>
        <input type="date" name="dob" onChange={handleChange} style={input}/>
        <br/><br/>

        <textarea name="address" placeholder="Address" onChange={handleChange} style={input}/>
        <br/><br/>
        </>

        )}

        {/* TECHNICIAN FORM */}

        {role==="technician" && (

        <>
        <input name="mobile" placeholder="Mobile" onChange={handleChange} style={input}/>
        <br/><br/>

        <input name="workType" placeholder="Work Type" onChange={handleChange} style={input}/>
        <br/><br/>

        <input name="experience" placeholder="Experience" onChange={handleChange} style={input}/>
        <br/><br/>

        <input name="location" placeholder="Location" onChange={handleChange} style={input}/>
        <br/><br/>

        <input name="email" placeholder="Email" onChange={handleChange} style={input}/>
        <br/><br/>
        </>

        )}

        {role && (

        <>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} style={input}/>
        <br/><br/>

        <input type="password" name="confirmPassword" placeholder="Re-enter Password" onChange={handleChange} style={input}/>
        <br/><br/>

        <div style={{marginBottom:"10px"}}>
        <b style={{background:"#ddd",padding:"5px 10px"}}>
        {captcha}
        </b>
        </div>

        <input name="captchaInput" placeholder="Enter Captcha" onChange={handleChange} style={input}/>
        <br/><br/>

        <button onClick={handleSubmit} style={btn}>Signup</button>
        </>

        )}

      </div>

    </div>

  );

}

const container={
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(to right,#4f46e5,#06b6d4)"
};

const card={
background:"white",
padding:"30px",
borderRadius:"12px",
width:"350px"
};

const input={
width:"100%",
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
};

const btn={
width:"100%",
padding:"12px",
background:"#4f46e5",
color:"white",
border:"none",
borderRadius:"6px"
};

export default Signup;

