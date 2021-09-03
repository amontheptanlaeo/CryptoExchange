import React  , { useState } from 'react'
import {
   Link
  } from "react-router-dom";

function List({data}) {
    
    return (
        <Link to={`Trade/${data.id}`}>
            <div className="listBox">
                <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'center', width:'200px'}}>
                    <img src={data.logo_url} style={{width:"30px", height:'30px' , marginRight:'1rem'}}/>
                    <p>{data.name + 'ราคา' + data.price}</p>
                </div>
            </div>
        </Link>
        
    )
}

export default List
