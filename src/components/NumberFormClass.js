import React, { Component } from 'react';

class NumberFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      sum: '',
      difference: '',
      product: '',
      remainder: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, this.calculateResults);
  }

  calculateResults = () => {
    const { num1, num2 } = this.state;
    const number1 = parseFloat(num1) || 0;
    const number2 = parseFloat(num2) || 0;

    this.setState({
      sum: number1 + number2,
      difference: number1 - number2,
      product: number1 * number2,
      remainder: number1 % number2
    });
  }

  render() {
    return (
      <div>
        <input
          type="number"
          name="num1"
          value={this.state.num1}
          onChange={this.handleChange}
          placeholder="Enter number 1"
        />
        <input
          type="number"
          name="num2"
          value={this.state.num2}
          onChange={this.handleChange}
          placeholder="Enter number 2"
        />
        <div>Sum: {this.state.sum}</div>
        <div>Difference: {this.state.difference}</div>
        <div>Product: {this.state.product}</div>
        <div>Remainder: {this.state.remainder}</div>
      </div>
    );
  }
}

export default NumberFormClass;
