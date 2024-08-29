import React, { useState, useRef } from "react";
import "./RandomPass.css";
const RandomPass = () => {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(8);
  const [allowNums, setAllowNums] = useState(true);
  const [allowAlphabets, setAllowAlphabets] = useState(true);
  const [allowChars, setAllowChars] = useState(true);
  const passwordRef = useRef(null);

  //! Generate password

  const generatePass = () => {
    let pass = "";
    let nums = "0123456789";
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let chars = "!@#$-+=/";
    let allChars = "";

    // ! Conditionals to allow the nums, alphabets and chars
    if (allowNums) allChars += nums;
    if (allowAlphabets) allChars += alphabets;
    if (allowChars) allChars += chars;

    if (allChars === "") {
      alert("Please select at least one character set.");
      return;
    }
    // ! Looping over the characters
    for (let i = 0; i < passLength; i++) {
      let randomNum = Math.floor(Math.random() * allChars.length);
      pass += allChars.charAt(randomNum);
    }
    setPassword(pass);
  };

  //! functions to handle passwords characters

  const handlePassLength = (event) => {
    setPassLength(event.target.value);
  };

  const handleNums = () => {
    setAllowNums((prev) => !prev);
  };

  const handleAlphabets = () => {
    setAllowAlphabets((prev) => !prev);
  };

  const handleChars = () => {
    setAllowChars((prev) => !prev);
  };

  //! Copy password
  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      passwordRef.current.select();
    }
  };

  return (
    <div className="container">
      {/* Input field */}
      <input
        type="text"
        className="pass__field"
        value={password}
        ref={passwordRef}
        readOnly
      />
      {/* Password characters  */}
      <div className="input__container">
        <span>
          {" "}
          <label htmlFor="passRange">Password Length</label>
          <input
            type="range"
            max={20}
            min={6}
            id="passRange"
            value={passLength}
            onChange={handlePassLength}
          />
          <span>{passLength}</span>
        </span>

        <span>
          <label htmlFor="nums">Allow Nums</label>
          <input
            type="checkbox"
            id="nums"
            onClick={handleNums}
            checked={allowNums}
          />
        </span>
        <span>
          <label htmlFor="alphabets">Allow Alphabets</label>
          <input
            type="checkbox"
            id="alphabets"
            onClick={handleAlphabets}
            checked={allowAlphabets}
          />
        </span>
        <span>
          <label htmlFor="characters">Allow Characters</label>
          <input
            type="checkbox"
            id="characters"
            onClick={handleChars}
            checked={allowChars}
          />
        </span>
      </div>

      {/* Buttons  */}
      <div className="btn__container">
        <button className="btn generate__btn" onClick={generatePass}>
          Generate Password
        </button>
        <button className="btn copy__btn" onClick={copyPassword}>
          Copy Password
        </button>
      </div>
    </div>
  );
};

export default RandomPass;
