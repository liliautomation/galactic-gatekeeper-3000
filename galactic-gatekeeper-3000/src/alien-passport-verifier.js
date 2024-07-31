import React, { useState } from 'react';
import Alert from './simple-alert-component'; // Make sure to create this file in the same directory

const GalacticGatekeeper3000 = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const verifyPassport = () => {
    const isValid = Math.random() < 0.5;
    const planet = ['Zorg', 'Blipblop', 'Squishsquash', 'Goopgloop'][Math.floor(Math.random() * 4)];
    const reason = isValid ? `Welcome, traveler from ${planet}!` : 'Suspicious lack of tentacles detected.';
    setVerificationResult({ isValid, reason });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#6200ee' }}>Galactic Gatekeeper 3000</h1>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Enter Alien Passport Number:
        </label>
        <input
          type="text"
          value={passportNumber}
          onChange={(e) => setPassportNumber(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          placeholder="e.g. ZORP-42-BLARG"
        />
      </div>
      <button
        onClick={verifyPassport}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#6200ee',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Verify Passport
      </button>
      {verificationResult && (
        <Alert type={verificationResult.isValid ? 'success' : 'error'}>
          <h4>{verificationResult.isValid ? 'Passport Verified' : 'Verification Failed'}</h4>
          <p>{verificationResult.reason}</p>
        </Alert>
      )}
    </div>
  );
};

export default GalacticGatekeeper3000;
