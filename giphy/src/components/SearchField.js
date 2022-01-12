import React, { useState, useEffect } from "react";
import GifCard from "./GifCard";

function SearchField() {
  const [keyWord, setKeyWord] = useState("SearchField");

  return (
    <main className="searchFieldContainer">
      <form
    
        className="d-flex m-5">
        <input
        style={{width:400,
        display:"flex",
        alignItems: 'center',
        justifyContent: 'center'}}
          type="text"
          className="form-control"
          onChange={(event) => setKeyWord(event.target.value)}
        ></input>

        <button className="btn btn-info">Search</button>
      </form>

        
      <GifCard findGif={(keyWord) => setKeyWord(keyWord)} /> 
    </main>
  );
}

export default SearchField;
