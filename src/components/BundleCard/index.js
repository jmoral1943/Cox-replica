import React from "react";
import Details from "./Details/index";

const BundleCard = props => (
  <div className="BundleCard">
    <p className="BundleCard__Header">{props.name}</p>
    <div className="BundleCard__included">
      <div className="BundleCard__Internet">
        {props.internet ? (
          <React.Fragment>
            <img
              className="BundleCard__image"
              src="https://internet.cox.com/svg/data-vis/internet-color.svg"
              alt="Internet included"
            />
            <p className="Internet__Speed">{props.internet}</p>
            <p className="Internet__Units">MBPS</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img
              className="BundleCard__image BundleCard__NotIncluded--Image"
              src="https://internet.cox.com/svg/data-vis/internet-blank.svg"
              alt="Internet is not included"
            />
            <p className="BundleCard__NotIncluded">Int not included</p>
          </React.Fragment>
        )}
      </div>

      <div className="BundleCard__Tv">
        {props.tv ? (
          <React.Fragment>
            <img
              className="BundleCard__image"
              src="https://internet.cox.com/svg/data-vis/tv-color.svg"
              alt="Tv included"
            />
            <p className="Tv__Channels">{props.tv}</p>
            <p className="Tv__Units">CHANNELS</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img
              className="BundleCard__image BundleCard__NotIncluded--Image"
              src="https://internet.cox.com/svg/data-vis/tv-blank.svg"
              alt="Tv is not included"
            />
            <p className="BundleCard__NotIncluded">Tv not included</p>
          </React.Fragment>
        )}
      </div>

      <div className="BundleCard__Voice">
        {props.voice ? (
          <React.Fragment>
            <img
              className="BundleCard__image"
              src="https://internet.cox.com/svg/data-vis/phone-color.svg"
              alt="Voice included"
            />
            <p className="Voice__Option">{props.voice}</p>
            <p className="Voice__Units">VOICE</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img
              className="BundleCard__image BundleCard__NotIncluded--Image"
              src="https://internet.cox.com/svg/data-vis/phone-blank.svg"
              alt="Voice is not included"
            />
            <p className="BundleCard__NotIncluded">Voice not included</p>
          </React.Fragment>
        )}
      </div>
    </div>

    <div className="BundleCard__PricesAndTerms">
      <div className="BundleCard__Price">
        <h3 className="PricesAndTerms__Price">
          <span>$ {props.price}</span> /mo.
        </h3>
        <p className="PricesAndTerms__Agreement">{props.agreement}</p>
      </div>

      <div className="BundleCard__Discounts">
        <p className="Discount">
          Save {props.discount}% <span> Reg. ${props.regularPrice}</span>
        </p>
        <p className="BundleCard__TermsAndCond">See Offer Details & Terms</p>
      </div>
    </div>

    <Details
      internet={["Up to 150 Mbps Download Speed", "Up to 10 Mbps Upload Speed"]}
      tv={["140+ Unique Channels"]}
      voice={false}
    />
  </div>
);

export default BundleCard;
