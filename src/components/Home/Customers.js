import React from "react";

import petro from "../../assets/petro-logo.jpg";
import energy from "../../assets/energy-logo.jpg";
import srei from "../../assets/srei-logo.jpg";
import ind from "../../assets/ind-logo.jpg";
import gharda from "../../assets/gharda-logo.jpg";
import ratna from "../../assets/ratna-logo.jpg";
import grade from "../../assets/grade-logo.jpg";

const Customers = () => {
  const cust = [petro, energy, srei, ind, gharda, ratna, grade];

  return (
    <div className="main-con">
      <div className="customer-box-main">
        <div className="container">
          <div className="customer-box">
            <h3>
              Diversified customers.<span> Diverse requirements.</span>
            </h3>
            <ul>
              {
                cust.map((item)=>{
                  return <li><img src={item} key={item}/></li>;
                })
              }
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
