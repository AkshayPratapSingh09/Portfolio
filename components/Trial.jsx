"use client"

import React, { useEffect, useState } from 'react';
import './YourComponent.css'; // Import the CSS styles or include them in a style tag within your component

const YourComponent = () => {
    const [wordArray, setWordArray] = useState([]);
    const [currentWord, setCurrentWord] = useState(0);
  
    useEffect(() => {
      const words = Array.from(document.getElementsByClassName('word'));
      setWordArray(words.map((word) => splitLetters(word)));
  
      changeWord();
  
      const intervalId = setInterval(changeWord, 4000);
  
      // Clear interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  
    function changeWord() {
      const cw = wordArray[currentWord];
      const nw = currentWord === wordArray.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  
      if (cw) {
        cw.forEach((letter, i) => animateLetterOut(letter, i));
      }
  
      if (nw) {
        nw.forEach((letter, i) => {
          letter.className = 'letter behind';
          letter.parentElement.style.opacity = 1;
          animateLetterIn(letter, i);
        });
      }
  
      setCurrentWord((prevCurrentWord) => (prevCurrentWord === wordArray.length - 1 ? 0 : prevCurrentWord + 1));
    }
  
    function animateLetterOut(letter, i) {
      setTimeout(() => {
        letter.className = 'letter out';
      }, i * 80);
    }
  
    function animateLetterIn(letter, i) {
      setTimeout(() => {
        letter.className = 'letter in';
      }, 340 + i * 80);
    }
  
    function splitLetters(word) {
      const content = word.innerHTML;
      word.innerHTML = '';
      const letters = [];
      for (let i = 0; i < content.length; i++) {
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      return letters;
    }
  
    return (
      <div className="text">
        <p>Nachos are</p>
        <p>{wordArray[currentWord]}</p>
      </div>
    );
  };
  
  export default YourComponent;