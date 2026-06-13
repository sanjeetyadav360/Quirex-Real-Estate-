//services
import React from "react";

import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
const Services = () => {
  const location = useLocation();

  return (
    <>
      {location?.pathname != "/" && <NavBar />}
      <div className="row py-5 bg servicesh">
        <div className="text-center ">
          <div className="tagline ">Our Services </div>
          <h2 className="section-title">Our Main Focus</h2>
        </div>
        <div className="col-sm-10 card1 mx-auto">
          <div className="row py-3">
            <div data-aos="fade-right" className="col-sm-4">
              <div className="card mx-auto shadow-lg p-4 border border-0">
                <img src="/img/home.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2">
                  <b>Buy a home</b>
                </h3>
                <p className="text-center">
                   Find the perfect place to call your own.We help you explore
                  the best properties in top locations, within your budget. From
                  first-time buyers to seasoned investors, we make the buying
                  process simple, transparent, and stress-free. Support.
                </p>
                <p className="text-center text-success py-3">
                  <span className=" bg-light rounded-2 p-2">
                    Find A Home &rarr;
                  </span>
                </p>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="col-sm-4">
              <div className="card mx-auto shadow-lg p-4 border border-0">
                <img src="/img/22.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2">
                  <b>Rent a home</b>
                </h3>
                <p className="text-center">
                 Move in, without long-term commitments. Choose from a wide
                  range of rental properties—apartments, houses, and commercial
                  spaces. ensure a smooth rental experience. 
                  Affordable Pricing Support.
                </p>
                <p className="text-center text-success py-3">
                  <span className=" bg-light rounded-2 p-2">
                    Find A Home &rarr;
                  </span>
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="col-sm-4 ">
              <div className="card mx-auto shadow-lg p-4 border border-0">
                <img src="/img/23.png" className="img-fluid w-50 mx-auto" />
                <h3 className="text-center py-2">
                  <b>Sell a home</b>
                </h3>
                <p className="text-center">
                  Get the best value for your property. List your property with
                  us and reach serious buyers fast. Our team handles marketing,
                  documentation, and negotiation. Free Property Valuation,  Paperwork
                  Assistance, Trusted Buyer Network.
                </p>
                <p className="text-center text-success py-3">
                  <span className=" bg-light rounded-2 p-2">
                    Find A Home &rarr;
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
