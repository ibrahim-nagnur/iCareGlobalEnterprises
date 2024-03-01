import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="contactContainer">
          <div className="addressContainer">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Office Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Godown Address
                </span>
                {props.data ? props.data.godownAddress : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? <a href={`tel:${props.data.phone}`}>{props.data.phone}</a> : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? <a href={`mailto:${props.data.email}`}>{props.data.email}</a> : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 I Care Global Enterprises
          </p>
        </div>
      </div>
    </div>
  );
};
