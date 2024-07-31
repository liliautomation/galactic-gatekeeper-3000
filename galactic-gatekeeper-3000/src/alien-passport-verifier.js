import React, { useEffect, useState } from "react";
import Alert from "./simple-alert-component";
import { Camera, CheckCircle, AlertCircle } from 'lucide-react';
import ConfirmModal from "./ConfirmModal";

const GalacticGatekeeper3000 = () => {
  const [passportNumber, setPassportNumber] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [data, setData] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [names, setNames] = useState(["PAUL S", "DAN D", "DMZ"]);
  const [currentName, setCurrentName] = useState("");
  const [passportImage, setPassportImage] = useState(null);

  const images = [
    "/images/alien_01.jpg",
    "/images/alien_02.jpg",
    "/images/alien_03.jpg",
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
    setError(null);
    setPassportImage(null);
    if (!passportNumber.trim()) {
      setError("Please enter your Alien Passport Number.");
      return;
    }
    if (!capturedImage) {
      setError("Please capture your alien photo.");
      return;
    }

    const isValid = Math.random() < 0.5;
    const planet = randomPlanet;
    const reason = isValid
      ? `Welcome, traveler from ${planet}!`
      : randomElement;
    setVerificationResult({ isValid, reason });

    if (isValid) {
      const randomPassportImage = images[Math.floor(Math.random() * images.length)];
      setPassportImage(randomPassportImage);
      setCurrentName(names[Math.floor(Math.random() * names.length)]);
      setShowModal(true);
    }
  };

  const openCamera = () => {
    setShowCamera(true);
    setCapturedImage(null);
    setCurrentImage("/images/alien_capture.png");
  };

  const capturePhoto = () => {
    setCapturedImage(currentImage);
    setShowCamera(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    setShowModal(false);
    // Additional logic for confirmation if needed
  };

  const handleNext = () => {
    const currentIndex = names.indexOf(currentName);
    const nextIndex = (currentIndex + 1) % names.length;
    setCurrentName(names[nextIndex]);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#6200ee" }}>
        Galactic Gatekeeper 3000
      </h1>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Find me by image
        </label>
        {showCamera ? (
          <div style={{ position: "relative", marginBottom: "10px" }}>
            <img 
              src={currentImage} 
              alt="Alien" 
              style={{ width: "100%", borderRadius: "4px" }}
            />
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80px",
              height: "80px",
              border: "4px solid white",
              borderRadius: "50%"
            }}></div>
            <button
              onClick={capturePhoto}
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#ff4136",
                color: "white",
                padding: "8px 16px",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer"
              }}
            >
              Capture
            </button>
          </div>
        ) : (
          <button
            onClick={openCamera}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#0074D9",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Camera style={{ marginRight: "8px" }} />
            {capturedImage ? "Retake Photo" : "Smile and Click"}
          </button>
        )}
      </div>
      {capturedImage && !showCamera && !verificationResult && (
        <div style={{ marginBottom: "20px" }}>
          <h5 style={{ marginBottom: "5px" }}>Captured Image:</h5>
          <img src={capturedImage} alt="Captured alien" style={{ width: "100%", borderRadius: "4px", border: "2px solid #6200ee" }} />
        </div>
      )}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          What's your Alien Passport Number:
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
      {error && (
        <div style={{ marginTop: "10px", color: "red" }}>
          {error}
        </div>
      )}
      {verificationResult && (
        <div style={{ marginTop: "20px" }}>
          <Alert type={verificationResult.isValid ? "success" : "error"}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {verificationResult.isValid ? (
                <CheckCircle style={{ marginRight: "8px" }} />
              ) : (
                <AlertCircle style={{ marginRight: "8px" }} />
              )}
              <div>
                <h4>
                  {verificationResult.isValid
                    ? "Passport Verified"
                    : "Verification Failed"}
                </h4>
                <p>{verificationResult.reason}</p>
              </div>
            </div>
          </Alert>
        </div>
      )}
      {capturedImage && (
        <div style={{ marginTop: "20px" }}>
          <h4 style={{ marginBottom: "10px" }}>Your Galactic Identity:</h4>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
              <h5 style={{ marginBottom: "5px" }}>Captured Image:</h5>
              <img src={capturedImage} alt="Captured alien" style={{ width: "100%", borderRadius: "4px", border: "2px solid #6200ee" }} />
            </div>
            {verificationResult && verificationResult.isValid && passportImage && (
              <div style={{ width: "48%" }}>
                <h5 style={{ marginBottom: "5px" }}>Passport Image:</h5>
                <img src={passportImage} alt="Alien Passport" style={{ width: "100%", borderRadius: "4px", border: "2px solid #6200ee" }} />
              </div>
            )}
          </div>
        </div>
      )}
      <ConfirmModal
        show={showModal}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onNext={handleNext}
        name={currentName}
      />
    </div>
  );
};

export default GalacticGatekeeper3000;