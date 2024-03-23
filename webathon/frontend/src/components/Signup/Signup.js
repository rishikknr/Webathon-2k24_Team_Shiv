import './Signup.css';
import React from 'react';

function Signup() {
    const wrapper = document.querySelector(".wrapper"),
    signupHeader = document.querySelector(".signup header"),
    loginHeader = document.querySelector(".login header");

    loginHeader.addEventListener("click", () => {
        wrapper.classList.add("active");
    });
    signupHeader.addEventListener("click", () => {
        wrapper.classList.remove("active");
    });

    return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Login &amp; Signup Form</title>
          <link rel="stylesheet" href="Signup.css" />
          <section className="wrapper">
            <div className="form signup">
              <header>Signup</header>
              <form action="#">
                <input type="text" placeholder="Full name" required />
                <input type="text" placeholder="Email address" required />
                <input type="password" placeholder="Password" required />
                <div className="checkbox">
                  <input type="checkbox" id="signupCheck" />
                  <label htmlFor="signupCheck">I accept all terms &amp; conditions</label>
                </div>
                <button className="pushable">
                  <span className="shadow" />
                  <span className="edge" />
                  <span className="front">
                    <label>Signup</label>
                  </span>
                </button>
              </form>
            </div>
            <div className="form login">
              <header>Login</header>
              <form action="#">
                <input type="text" placeholder="Email address" required />
                <input type="password" placeholder="Password" required />
                <a href="#">Forgot password?</a>
                <button className="pushable">
                  <span className="shadow" />
                  <span className="edge" />
                  <span className="front">
                    <label>Login</label>
                  </span>
                </button>
              </form>
            </div>
          </section>
        </div>
      );
}

export default Signup;
