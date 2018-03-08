import React from "react";
import "./box.css";

const Box = function(props){
    
    return (
             <div className="colorBox" style={{backgroundColor:props.color}}>
               
             </div>
        );
    
}


export default Box;