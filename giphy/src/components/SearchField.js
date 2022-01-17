import React, { useState, useEffect } from "react";
import GifCard from "./GifCard";

function SearchField() {
  

  const [keyWord, setKeyWord] = useState();
  const [dataInput, setDataInput] = useState([]);
  const [check, SetCheck] = useState(true);
  console.log("keyWord", keyWord);

  const api = async () => {
    try {
      const response = await fetch(
        "http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=2US8SEPxpR59AxswhCQLHxA0eiIxfGgc&limit=30"
      );
      const data = await response.json();
      setDataInput(data.data);
      SetCheck(false);
    } catch (err) {
      console.error(err.message);
    }

    
  };

  useEffect(() => {
    api();
  }, []);
  

  //show GIFs based on user input
  const onSubmitForm=(event)=>{

    
    event.preventDefault();
    //console.log("dfdsfdggs", keyWord);
    const api = async () => {
      try {
        const response = await fetch(
          "http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=2US8SEPxpR59AxswhCQLHxA0eiIxfGgc&limit=30"
        );
        const data = await response.json();
        
        setDataInput(data.data);
      
        SetCheck(false);
      } catch (err) {
        console.error(err.message);
      }
    };
    //console.log("input",dataInput[0].images.downsized_medium.url) 


  }
  
  return (
    <main className="searchFieldContainer">
      <form className="d-flex m-5">
        <input
          style={{
            width: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="text"
          className="form-control"
          onChange={(event) => setKeyWord(event.target.value)}
        ></input>

        <button className="btn btn-info" onClick={onSubmitForm} >Search</button>
       
      </form>

      {check === false ? (
        dataInput.map((val, index) => {
          return (
            <img
              style={{ width: 200, height: "400", padding: 10 }}
              src={val.images.downsized_medium.url}
              key={index}
            ></img>
          );
        })
      ) : (
        <p>error</p>
      )}

      

     
    </main>
  );
}

export default SearchField;
// <GifCard findGif={(keyWord) => setKeyWord(keyWord)} />
