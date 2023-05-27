import React from "react";
import MainCarousel from "./Carousel";
import VideoSec from "./Video";
import Customers from "./Customers";

import pre from "../../assets/pre.png";
import leagal from "../../assets/leagal.png";
import unite from "../../assets/unite.png";
import stand from "../../assets/stand.png";

const Home = () => {
  const solutions = [
    {
      id: 1,
      img: pre,
      para: "Pre - Acquisition due diligence",
    },
    {
      id: 2,
      img: leagal,
      para: "Legal service for Acquisition",
    },
    { id: 3, img: unite, para: "Unit Legal services" },
    {
      id: 4,
      img: stand,
      para: "stand alone services",
    },
  ];

  return (
    <>
      <MainCarousel></MainCarousel>

      <div className="main-con solution-box">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-12">
              <div className="sol-offer">
                <h2>Solutions</h2>
                <h3 className="cursive-font">we offer</h3>
              </div>
            </div>

            <div className="col-md-8  col-12">
              <div className="row">
                {solutions.map((item) => {
                  return (
                    <div className="col-md-6 col-12" key={item.id}>
                      <div className="offer-boxex">
                        <div className="icon-pack">
                          <img src={item.img} />
                        </div>
                        <h3>{item.para}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoSec></VideoSec>

      <Customers></Customers>
    </>
  );
};

export default Home;
