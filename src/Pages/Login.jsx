import React, { Component } from 'react';
import Joi from 'joi';
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}, // لتخزين الأخطاء بشكل منفصل لكل حقل
    redirect: false,
  };

  validateLoginForm = () => {
    let schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .label('Email'),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
        .label('Password'),
    });

    let { email, password } = this.state;
    let { error } = schema.validate({ email, password }, { abortEarly: false });

    if (error) {
      let errors = {};
      error.details.forEach((detail) => {
        errors[detail.context.key] = detail.message;
      });
      return { errors };
    }

    return { errors: null };
  };

  async sendLoginData() {
    // مثال على الاستجابة
    // let { data } = await axios.post('/api/login');
    // if (data.message === 'success') {
    //   this.setState({ redirect: true });
    // } else {
    //   this.setState({ errors: { general: 'Invalid credentials' } });
    // }
    this.setState({ redirect: true });
  }

  loginforchange = (e) => {
    let state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  submitLoginForm = (e) => {
    e.preventDefault();

    let validationResponse = this.validateLoginForm();

    if (validationResponse.errors) {
      this.setState({ errors: validationResponse.errors });
    } else {
      this.setState({ errors: {} });
      this.sendLoginData();
    }
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/home" />;
    }

    return (
      <>
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={this.submitLoginForm}>
            <label htmlFor="email">Email :</label>
            <input
              id="email"
              type="email"
              onChange={this.loginforchange}
              value={this.state.email}
              className="form-control my-3"
              name="email"
              placeholder="Email"
            />
            {this.state.errors.email && <div className="text-danger my-3">{this.state.errors.email}</div>}

            <label htmlFor="password">Password :</label>
            <input
              id="password"
              type="password"
              onChange={this.loginforchange}
              value={this.state.password}
              className="form-control my-3"
              name="password"
              placeholder="Password"
            />
            {this.state.errors.password && <div className="text-danger my-3">{this.state.errors.password}</div>}

            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}
