import React, { Component } from "react";

class Conditional extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isCond:true
        };
    }
    

        render(){
            let msg ="";
            if (!this.state.iscond) {
                msg =" Admin Login";
            }else {
                msg =" User Login";
            }
            return <h2>{msg}</h2>
        }

}

export default Conditional;