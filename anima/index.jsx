import React from "react";
import CTA from "./CTA.png";
import decore2 from "./decore-2.png";
import decore3 from "./decore-3.png";
import decore from "./decore.png";
import image from "./image.png";
import playDemo from "./play-demo.png";
import "./style.css";
import topNav from "./top-nav.png";

export const TravelAgency = () => {
  return (
    <div className="travel-agency">
      <div className="hero">
        <div className="overlap">
          <img className="decore" alt="Decore" src={decore2} />

          <img className="top-nav" alt="Top nav" src={topNav} />

          <div className="hero-content">
            <div className="overlap-group">
              <div className="desc">
                <div className="CTA">
                  <div className="div">
                    <img className="img" alt="Cta" src={CTA} />

                    <img className="play-demo" alt="Play demo" src={playDemo} />
                  </div>
                </div>

                <p className="tagline">BEST DESTINATIONS AROUND THE WORLD</p>

                <p className="text-wrapper">
                  Built Wicket longer admire do barton vanity itself do in it.
                  Preferred to sportsmen it engrossed listening. Park gate sell
                  they west hard for the.
                </p>

                <div className="overlap-2">
                  <img className="decore-2" alt="Decore" src={decore} />

                  <img className="decore-2" alt="Decore" src={decore3} />

                  <p className="heading">
                    Travel, enjoy
                    <br />
                    and live a new
                    <br />
                    and full life
                  </p>
                </div>
              </div>

              <img className="image" alt="Image" src={image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
