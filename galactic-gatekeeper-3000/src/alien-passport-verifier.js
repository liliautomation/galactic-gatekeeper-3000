import React, { useEffect, useState } from "react";
import Alert from "./simple-alert-component"; // Make sure to create this file in the same directory

const GalacticGatekeeper3000 = () => {
  const [passportNumber, setPassportNumber] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [data, setData] = useState(null);

  // Array of image URLs or paths
  const images = [
    "/images/alien_01.jpg",
    "/images/alien_02.jpg",
    "/images/alien_03.jpg",
    // Add more image paths or URLs as needed
  ];

  useEffect(() => {
    fetch("app.data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const randomPlanet = data
    ? data.planets[Math.floor(Math.random() * data.planets.length)]
    : "";
  const randomElement = data
    ? data.verificationFailures[
        Math.floor(Math.random() * data.verificationFailures.length)
      ]
    : "";

  const verifyPassport = () => {
    const isValid = Math.random() < 0.5;
    const planet = randomPlanet;
    const reason = isValid
      ? `Welcome, traveler from ${planet}!`
      : randomElement;
    setVerificationResult({ isValid, reason });
  };

  // Function to get a random image
  const getRandomImage = () => {
    if (images.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#6200ee" }}>
        Galactic Gatekeeper 3000
      </h1>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Enter Alien Passport Number:
        </label>
        <input
          type="text"
          value={passportNumber}
          onChange={(e) => setPassportNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          placeholder="e.g. ZORP-42-BLARG"
        />
      </div>
      <button
        onClick={verifyPassport}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#6200ee",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Verify Passport
      </button>
      {verificationResult && (
        <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
          {verificationResult.isValid && (
            <img
              src={getRandomImage()} // Use the random image URL or path
              alt="Verified"
              style={{ width: "100px", height: "auto", borderRadius: "8px", marginRight: "20px" }}
            />
          )}
          <div>
            <Alert type={verificationResult.isValid ? "success" : "error"}>
              <h4>
                {verificationResult.isValid
                  ? "Passport Verified"
                  : "Verification Failed"}
              </h4>
              <p>{verificationResult.reason}</p>
            </Alert>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalacticGatekeeper3000;
