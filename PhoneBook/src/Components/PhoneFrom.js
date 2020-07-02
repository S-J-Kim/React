import React, { Component } from 'react';

class PhoneForm extends Component{
    state = {
        name: '',
        phone: ''
    }

    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handlechange}
                    name="name"
                ></input>

                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handlechange}
                    name="phone"
                ></input>
                <div>{this.state.name} {this.state.phone}</div>
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;