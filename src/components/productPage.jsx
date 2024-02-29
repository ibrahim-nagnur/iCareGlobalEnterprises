import React from "react";
import parse from 'html-react-parser';
import WhatsApp from 'react-whatsapp';
import { Contact } from "./contact";

export const ProductPage = (props) => {
    console.log(props.data);
    return (
        <div>
            {props.data ? <div id="productsPage" className="text-center">
                <div className="productPageContainer">
                    <div className="productBannerContainer">
                        <img className="productBannerImage" src={props.data.image} alt={props.data.image} />
                    </div>
                    <div className="section-title margin-top-2 margin-bottom-2">
                        <h2>{props.data.name}</h2>
                    </div>
                    <div>
                        {parse(props.data.description)}
                    </div>
                </div>
            </div> : "Loading..."}
            <div className="buttonContainer">
                <p className="enquireText">Enquire now on </p>
                <WhatsApp className="whatsAppButton" number="+917996124324" message={`I want to enquire about ${props.data?.name}`}><i className="fa fa-whatsapp"></i> WhatsApp</WhatsApp>
            </div>
            {props.footer ? <Contact data={props.footer.Contact} /> : "Loading.."}
        </div>
    );
};
