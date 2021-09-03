import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import TradingViewWidget, { Themes, BarStyles } from "react-tradingview-widget";
import {
    useParams
  } from "react-router-dom";

function Trade() {

    const [data, setData] = useState([]);
    let { id } = useParams();

    const getData = async () => {
        try {
          const res = await axios.get(
            `https://api.bitkub.com/api/market/ticker?sym=THB_${id}`
          );
          // axios.get("https://api.nomics.com/v1/currencies/ticker?key=a4226d25887da85cc42bbd51ca0d5047&ids=BTC,ETH,XRP,DOGE,ZIL,WAN,ADA,LTC,ZRX,IOST,SNT&interval=1d,7d,30d,365d&convert=THB&per-page=100&page=1");
          setData(res.data[`THB_${id}`]);
    
          //console.log(data)
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        getData();
      },[]);

      console.log(data)

  return (
      <div className="Graph" style={{ width: "100%", height: "50vh" , display:'flex' , justifyContent:'space-between'}}>
          <div className="BOX" style={{width:'25%' , backgroundColor:'black' ,justifyContent:'center' , alignItems:'center' , display:'flex' , flexDirection:'column'}}>
              <p style={{color:'red' , width:'100%' ,fontSize:'30px' , height:'3rem' , backgroundColor:'#363636'}}>ราคาAsk {data.lowestAsk} บาท</p>
              <p style={{color:'green' , width:'100%' , fontSize:'30px' , height:'3rem' , backgroundColor:'#363636'}}>ราคาBid {data.highestBid} บาท</p>
          </div>
             
          <TradingViewWidget
              symbol={`${id}THB`}
              theme={Themes.DARK}
              BarStyles={BarStyles.HOLLOW_CANDLES}
              locale="th"
              autosize
            />
      </div>
  );
}

export default Trade;
