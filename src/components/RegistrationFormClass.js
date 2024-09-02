import React, { Component } from 'react';

class RegistrationFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      mobileNumber: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', JSON.stringify(this.state, null, 2));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="Enter first name"
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="Enter last name"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter email"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Enter password"
        />
        <input
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
          placeholder="Enter address"
        />
        <input
          type="tel"
          name="mobileNumber"
          value={this.state.mobileNumber}
          onChange={this.handleChange}
          placeholder="Enter mobile number"
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationFormClass;
