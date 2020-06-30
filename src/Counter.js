import React, { Component } from 'react';

class Counter extends Component{
    state = {
        num: 0
    }

    handleIncrease = () => {
        this.setState({
            num: this.state.num + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            num: this.state.num - 1
        });
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>Value : {this.state.num}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;