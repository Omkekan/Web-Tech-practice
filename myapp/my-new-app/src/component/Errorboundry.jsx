import React, { Component } from "react";

class Errorboundry extends Component {
    constructor(props) {
        super(props)

        this.state ={
            isCond:false
        }
        
    }
    
    static getDeriveStateFromError(){
        return{
            isCond:true
        }
    }
    componentDidCatch(error){
        console.log(error);
    }
    render(){
        if (this.state.isCond) {
            return <p> Not a User</p>
        }
        return this.props.children;
    }
}

export default Errorboundry;