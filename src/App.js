function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Fixify 🔧</h1>
      <p>Book your home services easily</p>

      <button style={{ padding: "10px 20px", fontSize: "16px" }}>
        Book Now
      </button>

      <h2 style={{ marginTop: "30px" }}>Our Services</h2>

      <div style={{ marginTop: "20px" }}>
        <button style={{ margin: "10px", padding: "10px" }}>🚿 Plumber</button>
        <button style={{ margin: "10px", padding: "10px" }}>⚡ Electrician</button>
        <button style={{ margin: "10px", padding: "10px" }}>❄️ AC Repair</button>
      </div>
    </div>
  );
}

export default App;