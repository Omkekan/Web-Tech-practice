import { Component } from "react";

class StateComp extends Component {
    // 1. Initialize state so prevstate.sal doesn't return NaN
    constructor(props) {
        super(props);
        this.state = {
            fname: "Om",
            sal: 50000 
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
                <h2>This is a state comp</h2>
                {/* 2. Changed <Strong> to <strong> */}
                <p>Name: <strong>{this.state.fname}</strong>, Salary: <strong>{this.state.sal}</strong></p>
                
                {/* 3. Simplified onClick syntax */}
                <button type="button" onClick={this.changeState}>
                    Change State (Method)
                </button>

                <button type="button" onClick={() => this.setState((prevstate) => ({ fname: "Om Kekan", sal: prevstate.sal + 1000 }))}> 
                    Change State (Inline)
                </button>
            </div>
        )
    }
}

export default StateComp;