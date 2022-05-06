import React, { Component } from "react";
import axios from "axios";
import NavBar from "../components/Shared/NavBar";
import "../App.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };

    this.dandleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const { email, password } = this.state;
    axios
      .post(
        "https://626b502d6a86cd64adba3e18.mockapi.io/user",
        {
          user: {
            email: email,
            password: password,
          },
        },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleAuthSuccess(response.data);
        }
      })

    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div class="flex justify-center">
          <div class="block w-64 p-6 rounded-lg shadow-lg bg-white max-w-lg">
            <form onSubmit={this.handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                required
              ></input>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                required
              ></input>
              <div class={" flex justify-around pt-10  "}>
                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="inline-block px-4 py-3 bg-teal-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
