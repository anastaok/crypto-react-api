import React from "react";
import "./SignupStyles.scss";

import Phone from "../../assets/trade.png";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="left">
          <img src={Phone} alt="" />
        </div>

        <div className="right">
          <h2>Earn passive income with crypto</h2>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
