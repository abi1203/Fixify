import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    dob: "",
    password: ""
  });

  // ✅ Add gradient animation only once
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes gradientMove {
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

    if (name === "name") {
      if (!/^[A-Za-z ]{3,}$/.test(value))
        errorMsg = "Name must contain only letters (min 3 characters)";
    }

    if (name === "phone" && !/^[0-9]{10}$/.test(value))
      errorMsg = "Phone must be 10 digits";

    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value))
      errorMsg = "Invalid Email";

    if (name === "address" && !value.trim())
      errorMsg = "Address required";

    if (name === "dob" && !value)
      errorMsg = "Select DOB";

    if (name === "password" && value.length < 6)
      errorMsg = "Min 6 characters required";

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg
    }));
  };

  const handleSubmit = () => {

    if (isLogin) {

      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser) {
        setMessage("No account found. Please Signup first.");
        setMessageType("error");
        return;
      }

      if (
        (form.email === savedUser.email ||
          form.email === savedUser.phone) &&
        form.password === savedUser.password
      ) {

        localStorage.setItem("isAuth", "true");

        setMessage("Login Successful ✅");
        setMessageType("success");

        setTimeout(() => {
          navigate("/booking");
        }, 1500);

      } else {
        setMessage("Invalid Credentials ❌");
        setMessageType("error");
      }

    } else {

      const hasErrors = Object.values(errors).some((err) => err);
      const hasEmpty = Object.values(form).some((val) => !val);

      if (hasErrors || hasEmpty) {
        setMessage("Please correct the errors before submitting");
        setMessageType("error");
        return;
      }

      localStorage.setItem("user", JSON.stringify(form));

      setMessage("Signup Successful 🎉");
      setMessageType("success");

      setTimeout(() => {
        setIsLogin(true);
      }, 1500);
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
        <span style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          color: "green",
          fontWeight: "bold"
        }}>✓</span>
      )}
      {errors[name] && (
        <small style={{ color: "red" }}>{errors[name]}</small>
      )}
    </div>
  );

  return (
    <div style={outerStyle}>
      <div style={cardStyle}>

        <h1 style={{ textAlign: "center", color: "#8d63ff" }}>
          Fixify 🔧
        </h1>

        {/* ✅ MESSAGE BOX */}
        {message && (
          <div style={{
            marginBottom: "15px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: messageType === "success" ? "#d4edda" : "#f8d7da",
            color: messageType === "success" ? "#155724" : "#721c24"
          }}>
            {message}
          </div>
        )}

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button onClick={() => setIsLogin(true)} style={toggleBtn(isLogin)}>Login</button>
          <button onClick={() => setIsLogin(false)} style={toggleBtn(!isLogin)}>Signup</button>
        </div>

        {!isLogin && (
          <>
            {renderInput("name", "Full Name")}
            {renderInput("phone", "Phone Number")}
            {renderInput("email", "Email")}
            {renderInput("address", "Address")}
            {renderInput("dob", "Date of Birth", "date")}
          </>
        )}

        {isLogin && renderInput("email", "Email or Phone")}

        {renderInput("password", "Password", "password")}

        <button onClick={handleSubmit} style={mainBtn}>
          {isLogin ? "Login" : "Create Account"}
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
  background: "linear-gradient(-45deg, #1e3c72, #2a5298, #00c6ff, #0072ff)",
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