/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar";
import "../App.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleAuthSuccess = this.handleAuthSuccess.bind(this);
  }

  handleAuthSuccess(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="flex flex-col items-center pb-36 ">
          <div className=" container  space-y-10  w-fit  mt-4  ">
            <h1 class="flex justify-around text-greenish-50 text-6xl font-bold">
              Hello fellow Kitesurfer
            </h1>
            <img
              class=" w-full rounded-t-3xl outline outline-offset-4 outline-8 outline-greenish-50 "
              src="https://i0.wp.com/www.kitejoy.at/wp-content/uploads/2017/10/43499443512_4761d883ac_k.jpg?fit=1200%2C800&ssl=1 "
              alt="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/58803xf7kk8fscnr5diiwwi3i53e_shutterstock_495863218.jpg"
            ></img>
            <div class="container mx-auto px-4 w-5/6">
              <p class="font-semibold text-greenish-50 text-4xl">
                Welcome to the best place where you can share your kitesurfing
                experience with other awesome Kitesurfers like you. Plese login
                or signup to get access to the most wonderful locations for
                kitesurfing around the globe.
              </p>
            </div>
            <img
              class="w-full rounded-b-3xl outline outline-offset-4 outline-8 outline-greenish-50"
              src="https://images.ctfassets.net/xhzuh2up4xai/01dGxB6hhbBGVjjj2doe76/91b5317e4ef2ee903b83f7b34b65fb21/kitesurfer_does_highfive_in_jump.jpg"
              alt="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/58803xf7kk8fscnr5diiwwi3i53e_shutterstock_495863218.jpg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
