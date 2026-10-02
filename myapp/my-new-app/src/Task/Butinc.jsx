import { Component } from "react";

// FIXED: Changed "butinc" to "Butinc"
class Butinc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "Om",
            sal: 0 
        };
    }

    changeState = () => { 
        this.setState((prevstate) => ({
            fname: "Om Kekan", 
            sal: prevstate.sal + 1000
        }));
    }

    render() {
        return (
            <div>
                <h2>Increment Component</h2>
                <p>Name: <strong>{this.state.fname}</strong>, Salary: <strong>{this.state.sal}</strong></p>
                <button type="button" onClick={this.changeState}>
                    Increase Salary
                </button>
            </div>
        )
    }
}

// FIXED: Export matches class name
export default Butinc;