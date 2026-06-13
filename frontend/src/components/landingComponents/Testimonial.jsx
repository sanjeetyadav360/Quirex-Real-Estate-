import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="row py-5 background ">
        <div className="text-center ">
          <div className="tagline ">Our Testimonial</div>
          <h2 className="section-title">Clients Feedback</h2>
        </div>
        <div className="col-sm-10 mx-auto ">
          <div className="row py-3">
            <div className="col-sm-4 ">
              <div className="card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3">
                <span className="feedtop">
                  <img src="/img/testimonial1.png" />
                </span>
                <p className="px-3 feedtext">
                  "Mujhe apna old house bechna tha. Inhone accurate valuation
                  ki, genuine buyers laaye, aur paperwork bhi khud handle kiya.
                  Main bina kisi tension ke best price par property sell kar
                  paya. Highly recommended!"
                </p>
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src="/img/1.jpg_1.jpeg"
                      className="img-fluid feedimg"
                    />
                  </div>
                  <div className="col-8">
                    <span>
                      <b>Jacob William</b>
                      <br />
                      <p className="color1">SELLING AGENTS</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 ">
              <div className="card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3">
                <span className="feedtop">
                  <img src="/img/testimonial1.png" />
                </span>
                <p className="px-3 feedtext">
                  "Rental property dhoondhna mere liye stressful tha, lekin inki
                  team ne meri zarurat samjhi aur mujhe ek safe, affordable aur
                  fully-furnished flat within 3 days dilwa diya. Bahut hi
                  professional aur fast service!"
                </p>
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src="/img/2.jpg_1.jpeg"
                      className="img-fluid feedimg"
                    />
                  </div>
                  <div className="col-8">
                    <span>
                      <b>Kelian Anderson</b>
                      <br />
                      <p className="color1">SELLING AGENTS</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 ">
              <div className="card border border-0 shadow-lg mx-auto rounded-3 p-3 feedcard w-76 pb-3">
                <span className="feedtop">
                  <img src="/img/testimonial1.png" />
                </span>
                <p className="px-3 feedtext">
                  "me apne sapno ke ghar ke kareeb hoon. Inki team ne meri har
                  chhoti-badi zarurat ko samjha, budget ka dhyan rakha,
                  Professionalism, honesty aur warmth — sab kuch ek jagah mila.
                  Truly a 5-star experience!"
                </p>
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src="/img/3.jpg_2.jpeg"
                      className="img-fluid feedimg"
                    />
                  </div>
                  <div className="col-8">
                    <span>
                      <b>Adam Joseph</b>
                      <br />
                      <p className="color1">SELLING AGENTS</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
