import Joi from "joi";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
    error: "",
    redirect: false,
  };

  validateRegisterForm = () => {
    let schema = Joi.object({
      first_name: Joi.string().min(3).max(30).required().label("First Name"),
      last_name: Joi.string().min(3).max(30).required().label("Last Name"),
      age: Joi.number().integer().min(10).max(80).required().label("Age"),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required()
        .label("Email"),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .label("Password"),
    });

    let state = { ...this.state };
    delete state.error;
    delete state.redirect;

    let { error } = schema.validate(state, { abortEarly: false });
    if (error) {
      let errors = {};
      error.details.forEach((detail) => {
        errors[detail.context.key] = detail.message;
      });
      return { errors };
    }

    return { errors: null };
  };

  async sendRegistrData() {
    // let {data}=  await axios.post('/api/register')
    // if (data.message == 'success'){

    //
    // }else {
    //
    // }
    this.setState({ redirect: true });
  }

  registerforchange = (e) => {
    let state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  submitRegisterForm = (e) => {
    e.preventDefault();

    let validationResponse = this.validateRegisterForm();

    if (validationResponse.errors) {
      this.setState({ error: validationResponse.errors });
    } else {
      this.setState({ error: null });
      this.sendRegistrData();
    }
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/login" />;
    }
    return (
      <>
        <div className="container mt-3">
          <h1>Register</h1>
          <form onSubmit={this.submitRegisterForm}>
            <label htmlFor="fname">First Name :</label>
            <input
              id="fname"
              type="text"
              onChange={this.registerforchange}
              value={this.state.first_name}
              className="form-control my-3"
              name="first_name"
              placeholder="First Name"
            />
            {this.state.error?.first_name && (
              <div className="text-danger my-3 ">{this.state.error.first_name}</div>
            )}

            <label htmlFor="lname">Last Name :</label>
            <input
              id="lname"
              type="text"
              onChange={this.registerforchange}
              value={this.state.last_name}
              className="form-control my-3"
              name="last_name"
              placeholder="Last Name"
            />
            {this.state.error?.last_name && (
              <div className="text-danger my-3">{this.state.error.last_name}</div>
            )}

            <label htmlFor="age">Age :</label>
            <input
              id="age"
              type="number"
              onChange={this.registerforchange}
              value={this.state.age}
              className="form-control my-3"
              name="age"
              placeholder="Age"
            />
            {this.state.error?.age && (
              <div className="text-danger my-3">{this.state.error.age}</div>
            )}

            <label htmlFor="email">Email :</label>
            <input
              id="email"
              type="email"
              onChange={this.registerforchange}
              value={this.state.email}
              className="form-control my-3"
              name="email"
              placeholder="Email"
            />
            {this.state.error?.email && (
              <div className="text-danger my-3">{this.state.error.email}</div>
            )}

            <label htmlFor="password">Password :</label>
            <input
              id="password"
              type="password"
              onChange={this.registerforchange}
              value={this.state.password}
              className="form-control my-3"
              name="password"
              placeholder="Password"
            />
            {this.state.error?.password && (
              <div className="text-danger my-3">{this.state.error.password}</div>
            )}

            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
