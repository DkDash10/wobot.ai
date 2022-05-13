import React from "react";
import logo from "./logo.svg";
import logo2 from "./logo2.png";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="logo">
          <img className="logo-img" src={logo} alt="logo" />
        </div>
        <div className="home-card">
          <div className="card-top">
            <div className="card-logo">
              <img className="img" src={logo2} alt="" />
            </div>
            <h3 className="card-title">It’s a delight to have you onboard</h3>
            <p className="card-bio1">Help us know you better.</p>
            <div className="card-bio2">
              (This is how we optimize Wobot as per your business needs)
            </div>
          </div>
          <div className="card-bottom">
            <form className="form">
              <div className="card-name">
                <label htmlFor="Cname">Company Name</label>
                <input type="text" placeholder="e.g. Example Inc" />
              </div>
              <div className="card-i">
                <label htmlFor="Iname">Industry</label>
                <select name="industry" id="industry">
                  <option value="I0" disabled>
                    Select
                  </option>
                  <option value="I1">Industry 1</option>
                  <option value="I2">Industry 2</option>
                  <option value="I3">Industry 3</option>
                  <option value="I4">Industry 4</option>
                </select>
              </div>
              <div className="card-size">
                <label htmlFor="Csize">Company size</label>
                <div className="card-button">
                  <button className="button">1-20</button>
                  <button className="button">21-50</button>
                  <button className="active">51-200</button>
                  <button className="button">201-500</button>
                  <button className="button">500+</button>
                </div>
              </div>

              <button className="lButton">Get Started</button>
            </form>
          </div>
        </div>
      <div className="clip" />
<div className="clip2"/>
<div className="clip3"/>
      </div>
      <div className="footer">Terms of use | Privacy policy</div>
    </>
  );
};

export default Home;
