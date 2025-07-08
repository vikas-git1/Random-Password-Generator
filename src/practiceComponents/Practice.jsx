import React from "react";
import { useState } from "react";

const Practice = () => {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(true);
  const [alphabetsAllowed, setAlphabetAllowed] = useState(true);
  const [charsAllowed, setCharsAllowed] = useState(true);

  const handleGeneratePass = () => {
    let pass = "";
    let nums = "1234567890";
    let alphabets = "qwertyuiopasfghjklzxcvbnmQWERTYUIOPAFGHJKLZXCVBNM";
    let chars = "!@#$%^&*()";

    let allChars = "";
    if (numAllowed) {
      allChars += nums;
    }
    if (alphabetsAllowed) {
      allChars += alphabets;
    }

    if (charsAllowed) {
      allChars += chars;
    }

    if (allChars === "") {
      alert("Please select atleast one character set.");
      return;
    }

    for (let i = 1; i <= passLength; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      pass += allChars.charAt(randomIndex);
    }
    setPassword(pass);
  };

  const handleInputRange = (event) => {
    setPassLength(event.target.value);
  };

  const handlNumChange = () => {
    setNumAllowed((prev) => !prev);
  };

  const handleAlphabetChange = () => {
    setAlphabetAllowed((prev) => !prev);
  };

  const handleCharChange = () => {
    setCharsAllowed((prev) => !prev);
  };

  const handleCopyPass = () => {
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert(`Password "${password}" is copied`);
        })
        .catch((err) => {
          alert(`Error Occurd: ${err}`);
        });
    } else {
      alert("Please Generate the password");
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={password} readOnly />
        <button onClick={handleGeneratePass}>Generate Password</button>
        <button onClick={handleCopyPass}>Copy Password</button>
      </div>
      <div>
        <label htmlFor="inputRange">{passLength}</label>
        <input
          type="range"
          value={passLength}
          onChange={handleInputRange}
          min={8}
          max={21}
          id="inputRange"
        />
        <label htmlFor="allowNum">Allow Nums</label>
        <input
          type="checkbox"
          id="allowNum"
          checked={numAllowed}
          onChange={handlNumChange}
        />
        <label htmlFor="allowAlphabet">Allow Alphabets</label>
        <input
          type="checkbox"
          id="allowAlphabet"
          checked={alphabetsAllowed}
          onChange={handleAlphabetChange}
        />
        <label htmlFor="allowChars">Allow Character</label>
        <input
          type="checkbox"
          id="allowChars"
          checked={charsAllowed}
          onChange={handleCharChange}
        />
      </div>
    </div>
  );
};

export default Practice;
