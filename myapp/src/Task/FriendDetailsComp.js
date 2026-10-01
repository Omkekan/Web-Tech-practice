import React,{Component} from "react";

class FriendDetailsComp extends Component{
    render(){
        return<div> <h2>this is class component</h2>
                    <p> Fname:{this.props.Fname},Lname:{this.props.Lname},Contact:{this.props.Contact},
                Gender:{this.props.Gender},Address:{this.props.Address}
            </p>
        </div>
    }
}

export  default FriendDetailsComp;