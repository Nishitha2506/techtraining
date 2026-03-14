import React, { useState } from "react";
import axios from "axios";

function Weather() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city) {
      alert("Please enter a city");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:8080/city/${city}`
      );

      setWeather(response.data);

    } catch (error) {
      setWeather("Error fetching weather");
    } finally {
      setLoading(false);
    }
  };

//  async function clearCache(){
//      const res=await   axios.get("http://localhost:8080/clear-cache")
//       .then(() => alert("Cache cleared"))
//       .catch(() => alert("Error clearing cache"));  
//   }

  return (
    <div style={styles.container}>
      <h1>🌦 Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.input}
      />

      <button onClick={getWeather} style={styles.button}>
        Get Weather
      </button>
      {/* <button onClick={clearCache}>Clear Cache</button> */}

      {loading && <p>Loading weather...</p>}

      {weather && (
        <div style={styles.result}>
          <h3>{weather}</h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginRight: "10px"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer"
  },
  result: {
    marginTop: "20px",
    fontSize: "20px",
    color: "blue"
  }
};

export default Weather;