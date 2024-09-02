import React, { createRef } from 'react';

class NumberFormUncontrolled extends React.Component {
  constructor(props) {
    super(props);
    this.num1Ref = createRef();
    this.num2Ref = createRef();
    this.state = {
      sum: '',
      difference: '',
      product: '',
      remainder: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const num1 = parseFloat(this.num1Ref.current.value) || 0;
    const num2 = parseFloat(this.num2Ref.current.value) || 0;

    this.setState({
      sum: num1 + num2,
      difference: num1 - num2,
      product: num1 * num2,
      remainder: num1 % num2
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          ref={this.num1Ref}
          placeholder="Enter number 1"
        />
        <input
          type="number"
          ref={this.num2Ref}
          placeholder="Enter number 2"
        />
        <button type="submit">Calculate</button>
        <div>Sum: {this.state.sum}</div>
        <div>Difference: {this.state.difference}</div>
        <div>Product: {this.state.product}</div>
        <div>Remainder: {this.state.remainder}</div>
      </form>
    );
  }
}

export default NumberFormUncontrolled;
