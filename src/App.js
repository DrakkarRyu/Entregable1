import React from "react";
import './App.css';
import { useState } from "react";
import quotes from './quotes.json';
import QuoteBox from './components/QuoteBox.jsx';

function App() {

  const colors = [
    "#4F4F4F",
    "#836FFF",
    "#FFD700",
    "#FF8C00",
    "#FF6347",
    "#FF69B4",
    "#BC8F8F",
    "#48D1CC",
  ];

  const [phrases, setGetQuote] = useState(quotes[getNumber(quotes.length)]);
  const [background, setBackground] = useState(
    colors[getNumber(colors.length)]
  );

  const handleQuote = () => {
    const index = getNumber(quotes.length);
    setGetQuote(quotes[index]);
    setBackground(colors[getNumber(colors.length)]);
  };

  return (
    <div className= "app" style={{background}}>
      <QuoteBox 
        quote={phrases.quote}
        author={phrases.author}
        handleQuote={handleQuote}
        background={background}
      />
    </div>
  );
}

const getNumber = (max) => Math.floor(Math.random() * max);
export default App;
