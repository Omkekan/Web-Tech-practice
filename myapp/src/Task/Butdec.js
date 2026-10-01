import { Component } from "react";

class SalaryController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "Om Kekan",
            sal: 50000 
        };
    }

    increment = () => this.setState((prevState) => ({ sal: prevState.sal + 1000 }));
    decrement = () => this.setState((prevState) => ({ sal: prevState.sal - 1000 }));
    resetToZero = () => this.setState({ sal: 0 }); // No need for prevState here

    render() {
        return (
            <div>
                <h2>Salary Controller</h2>
                <p>Name: <strong>{this.state.fname}</strong>, Salary: <strong>{this.state.sal}</strong></p>
                
                <button type="button" onClick={this.increment}>+1000</button>
                <button type="button" onClick={this.decrement}>-1000</button>
                <button type="button" onClick={this.resetToZero}>Set to 0</button>
            </div>
        )
    }
}

export default SalaryController;