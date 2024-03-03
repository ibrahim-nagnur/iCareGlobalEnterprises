import React from "react";
import parse from 'html-react-parser';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Carousel>
              <div>
                <img className="img-responsive" src="img/about.jpg" alt="i care global enterprises" />
              </div>
              <div>
                <img className="img-responsive" src="img/about1.jpg" alt="i care global enterprises" />
              </div>
              <div>
                <img className="img-responsive" src="img/about2.jpg" alt="i care global enterprises" />
              </div>
              <div>
                <img className="img-responsive" src="img/about3.jpg" alt="i care global enterprises" />
              </div>
              <div>
                <img className="img-responsive" src="img/about4.jpg" alt="i care global enterprises" />
              </div>
            </Carousel>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              {props.data ? parse(props.data.paragraph) : "loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
