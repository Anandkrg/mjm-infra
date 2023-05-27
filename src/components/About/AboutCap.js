import React from "react";

import abtbanner from "../../assets/team-banner.jpg"

const AboutBanner = () => {
  return (
    <>
      <div className="main-con pic-con" style={{ backgroundImage: "url(" + abtbanner + ")" }}></div>
      <div>
        <div className="main-con">
          <div className="container">
            <div className="about-inner">
              <h1>About US</h1>
              <p>
                We consider every aspect pertaining to land namely, the
                environment, surroundings, state policies, geography, location,
                future plans, etc.before designing the appropriate use for it
                and accessing its true potential. A wide network across
                facilitators, brokers and farmers allows us to provide
                impeccable on-ground services. It has also helped us achieve a
                solid track record in acquiring the most difficult classes of
                land. We pride ourselves on our proficiency in getting a 100%
                marketable land title in every clients name despite India's
                complicated land laws
              </p>
            </div>
          </div>
        </div>

        <div className="main-con grey-box about-inner">
          <div className="container">
            <h2>Increasing Real Estate Value with Uncompromising Integrity</h2>
            <p>
              MJM Infra provides development management services in the areas of
              land acquisition due diligence, land entitlement, land
              development, and bond release for communities throughout the
              Ratnagiri area in Maharashtra .
            </p>
            <p>
              The goal of MJM Infra is to increase the value of the client's
              real estate by providing superior land entitlement and development
              consulting services with uncompromising integrity and character.
              These services are primarily offered to developers, residential
              and commercial builders, municipalities, equity funds, financial
              institutions or individuals with real estate interests.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
