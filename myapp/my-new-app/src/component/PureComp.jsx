import React, {Component, PureComponent} from "react";

class PureComp extends PureComponent {
    render() {
        console.log("pire component render");
        return(
            <div> 
                <h2> This is a pure function</h2>
                <div> Item:<strong>{this.props.newItem}</strong></div>
            </div>
        )
    }
}
export default PureComp