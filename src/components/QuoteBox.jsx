import React from "react";
import Button from "./Button";



function QuoteBox({quote, author,background,handleQuote}) {
    return (
        <div className='quoteBox'>
            <h2 style={{ color: background }}>{quote}</h2>
            <h3 style={{ color: background }}>{author}</h3>
          <Button handleQuote={handleQuote} background={background}/>
        </div>
        
    );
}

export default QuoteBox;