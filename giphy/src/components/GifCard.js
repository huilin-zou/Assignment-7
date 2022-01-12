import React, { useState, useEffect } from "react";

function GifCard(props) {
  const [input, setInput] = useState(["search gif"]);
  const [check, SetCheck] = useState(true);
  console.log(props);
  const api = async () => {
    try {
      const response = await fetch(
        "http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=2US8SEPxpR59AxswhCQLHxA0eiIxfGgc&limit=15"
      );
      const data = await response.json();
      setInput(data.data);
      SetCheck(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    api();
  }, []);

  return (
    <>
      {check === false ? (
        input.map((val, index) => {
          return (
            <img
              style={{ width: 200, height: "400", padding: 10 }}
              src={val.images.downsized_medium.url}
              key={index}
            ></img>
          );
        })) : (<p>error</p>
      )}
    </>
  );
}

export default GifCard;
