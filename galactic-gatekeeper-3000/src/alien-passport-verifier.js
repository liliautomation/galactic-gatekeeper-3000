import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

// Simplified Alert component
const Alert = ({ children, className }) => (
  <div className={`p-4 rounded-md ${className}`}>
    {children}
  </div>
);

const AlertTitle = ({ children }) => (
  <h4 className="font-medium mb-1">{children}</h4>
);

const AlertDescription = ({ children }) => (
  <div className="text-sm">{children}</div>
);

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
    <div className="min-h-screen bg-black text-green-400 font-mono p-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 animate-pulse">
          Galactic Gatekeeper 3000
        </h1>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-green-500">
          <label className="block mb-2 text-lg">
            Enter Alien Passport Number:
          </label>
          <input
            type="text"
            value={passportNumber}
            onChange={(e) => setPassportNumber(e.target.value)}
            className="w-full p-3 mb-4 bg-black border border-green-500 rounded text-green-400 placeholder-green-700"
            placeholder="e.g. ZORP-42-BLARG"
          />
          <button
            onClick={verifyPassport}
            className="w-full py-3 px-4 bg-green-600 text-black rounded hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Verify Passport
          </button>
          {verificationResult && (
            <Alert className={`mt-4 ${verificationResult.isValid ? 'bg-green-900' : 'bg-red-900'} border-none`}>
              <div className="flex items-start">
                {verificationResult.isValid ? (
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
                )}
                <div>
                  <AlertTitle>{verificationResult.isValid ? 'Passport Verified' : 'Verification Failed'}</AlertTitle>
                  <AlertDescription>{verificationResult.reason}</AlertDescription>
                </div>
              </div>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalacticGatekeeper3000;