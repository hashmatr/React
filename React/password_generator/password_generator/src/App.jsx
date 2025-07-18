import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [Password, setPassword] = useState('');
  const [AllowNumber, setAllowNumber] = useState(false);
  const [AllowChar, setAllowChar] = useState(false);
  const [Length, setLength] = useState(8);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (AllowChar) str += '!@#$%^&*()_+';
    if (AllowNumber) str += '0123456789';

    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [AllowChar, AllowNumber, Length]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">🔐 Password Generator</h1>

        {/* Password Display */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={Password}
            readOnly
            ref={passwordRef}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black font-mono"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label htmlFor="length" className="block mb-1 font-semibold">
            Length: {Length}
          </label>
          <input
            id="length"
            type="range"
            min="4"
            max="64"
            value={Length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="flex justify-between mb-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={AllowNumber}
              onChange={() => setAllowNumber((prev) => !prev)}
              className="accent-blue-600"
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={AllowChar}
              onChange={() => setAllowChar((prev) => !prev)}
              className="accent-blue-600"
            />
            Include Symbols
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
        >
          🔁 Generate New Password
        </button>
      </div>
    </div>
  );
};

export default App;
