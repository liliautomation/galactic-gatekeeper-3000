import React from 'react';
import GalacticGatekeeper3000 from './alien-passport-verifier'; // Adjust the path if necessary
import { Rocket, AlertTriangle } from 'lucide-react'; // Changed Alien to Rocket

function App() {
  return (
    <div className="App min-h-screen bg-black text-green-400 font-mono flex flex-col">
      <header className="App-header p-6 bg-gray-900 border-b-2 border-green-500">
        <h1 className="text-3xl font-bold flex items-center justify-center">
          <Rocket className="mr-2 h-8 w-8" /> {/* Changed Alien to Rocket */}
          Welcome to the Intergalactic Immigration Office
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center p-6">
        <GalacticGatekeeper3000 />
      </main>
      <footer className="p-4 bg-gray-900 border-t-2 border-green-500 text-center">
        <p className="flex items-center justify-center text-yellow-400">
          <AlertTriangle className="mr-2 h-5 w-5" />
          Disclaimer: This system is about as reliable as a chocolate teapot. Use at your own risk!
        </p>
      </footer>
    </div>
  );
}

export default App;