import React from "react";

const Header = () => {
  return (
    <header>
    
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            <b>WE CONNECT</b>
          </a>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#Home">
                  <b>HOME</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Services">
                  <b>SERVICES</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#ContactUs">
                  <b>CONTACT US</b>
                </a>
              </li>

              <div class="dropdown">
                <button class="dropbtn">
                  <b>PRODUCT</b>
                </button>
                <div class="dropdown-content">
                  <a href="#dth">DTH</a>
                  <a href="#fiber">Xstream Fiber</a>
                </div>
              </div>

              <div class="dropdown">
                <button class="dropbtn">
                  <b>PREPAID</b>
                </button>
                <div class="dropdown-content">
                  <a href="#plans">View Plans</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn">
                  <b>BROADBAND</b>
                </button>
                <div class="dropdown-content">
                  <a href="#modem">Digital Subscriber Line (DSL)</a>
                  <a href="#dsl">Cable Modem</a>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      

      <div class="nav-pic"></div>

      <img
        src="https://wallpaperaccess.com/full/136004.jpg"
        width="1505"
        height="500"
        alt=""
      ></img>
    </header>
  );
};

export default Header;