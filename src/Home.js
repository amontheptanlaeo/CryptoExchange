import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
function Home() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.nomics.com/v1/currencies/ticker?key={KEY}&convert=THB&per-page=10&page=1"  , {
          headers: {"Access-Control-Allow-Origin": "*"}
        }
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    setTimeout(() => {
      getData();
      console.log(data)
    }, 2500);

    
  });
  return (
    <div className="App" style={{padding:'3rem'}}>
      {data.map((coin) => (
        <List data={coin} />
      ))}
    </div>
  );
}

export default Home;
