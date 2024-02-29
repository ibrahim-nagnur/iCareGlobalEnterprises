import React from "react";

export const Products = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-xs-12 col-sm-6 col-md-4">
                <div className="productCard">
                  <img src={d.image} alt={d.name} className="cardImage" />
                  {/* <i className={d.icon}></i> */}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <a href={d.link}
                      className="btn btn-custom btn-lg page-scroll">
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
