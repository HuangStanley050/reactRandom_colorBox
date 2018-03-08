import React from "react";
import Box from "./box.js";
import "./container.css";

    


    
/*

<Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        */




class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            colors: ["red","blue","yellow","green","orange","pink"]
            
        };
        
        
        
    setInterval(()=>{
        
        
         var dummy = this.state.colors;
        
        for(var i=0;i<dummy.length;i++)
        {
            var choices=["red","blue","yellow","green","orange","pink"];
        //alert(instructor_index);
        var choices_index=Math.floor(Math.random()*6);
        var color=choices[choices_index];
       
        
        dummy[i]=color;
        //dummy[1]="purple";
        this.setState({instructors:dummy});
        }
        
        
            
            
        }, 1000);
        
        
        
        
    }
    
    
    
    
    
    
    
    render() {
        
        var list =[];
        var temp=this.state.colors;
        function drawBox(){
            for(var i=0;i<6;i++){
            list.push(<Box color={temp[i]} />);
            }
        }

            
            
        drawBox();
            
            
        return (
            <div className="holder">
                {list}
                       {/*<Box color={this.state.colors[1]} />*/}
                        
                        
            </div>
            );
        
    }
    
}

export default Container;