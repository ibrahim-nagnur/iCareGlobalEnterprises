import React from "react";
import parse from 'html-react-parser';

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Why Choose Us</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-6 col-md-4">
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                {d.text ? parse(d.text) : "loading..."}
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
