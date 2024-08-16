

import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import SimpleMap from "./SimpleMap";

import "./comp/App.css"

function FApp() {

  const history = useHistory();
  const [data, set_data] = useState();

  useEffect(() => {
    fetch("https://smartgarbage-f4f3b-default-rtdb.firebaseio.com/.json")
    .then(response => response.json())
    .then(data => set_data(data))
  },[data])
if(!data){
  return(
<h1>Loading</h1>

  );
}
  return (
    <div className="App">
{Object.values(data.Bins).map((e,index=0)=>{
       return (
       <div className={(e.BinLevel > 74)||(e.GasData>401) ? "comp color_red" : "comp color_green"} key={index+1} onClick={()=>history.push("/map/"+e.Latt+"a"+e.Longg+"a"+e.BinNo+"a"+e.BinLevel)}>
          {console.log(e)}
          <h2>Bin No :- {e.BinNo} </h2>
        <h3>Gas Status:- {e.GasLevel} </h3>
       
        {/* <h1>Gas Sensor data {e.GasData} </h1> */}
        
        <h3>Garbage level {e.BinLevel} % fill</h3>
        
        


        <div className="box"></div>


         </div>
     );})}



    </div>
  );
}

export default FApp;