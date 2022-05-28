/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Views/Registration";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import axios from "axios";
import "./App.css";
import Home from "./Views/Home";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: "NOT_LOGGED_IN",
      user: {}
    }
console.log(process.env)
    this.handleLogin = this.handleLogin.bind(this);
  }
  checkLoginStatus() {
    axios.get("https://62692e30aa65b5d23e812e0b.mockapi.io/login", { headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      withCredentials: true
  }}).then(response => {
    if (response.dada.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN")
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: response.data.user
    })
   else if (!response.data.logged_in & this.state.loggedInStatus === "LOGGED_IN"){
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: response.data.user
    })
  }})}

    componendDidMount() {
      this.checkLoginStatus()
    }

  handleLogin(data) {
    this.setState({
      loggedIn: "LOGGED_IN" ,
      user: data.user
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} />}/>
            <Route exact path="/login" element={<Login handleAuthSuccess={this.props.handleAuthSuccess} />}/>  
            <Route exact path="/register" element={<Registration handleAuthSuccess={this.props.handleAuthSuccess}   />}/>
            <Route exact path="/dashboard" element={<Dashboard handleLogin={this.handleLogin}  loggedIn={this.state.loggedIn} />}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

//Am ramas in criza de timp si nu am mai adaugat logica pentru favorite si log-in