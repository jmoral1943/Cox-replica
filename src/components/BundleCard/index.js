import React from "react";
import Details from "./Details/index";
import OrderButton from "./OrderButton";

const BundleCard = props => (
  <div className="c-bundle-card">
    <p className="c-bundle-card__header">{props.name}</p>
    <div className="c-bundle-card__services">
      <div className="c-bundle-card__service c-bundle-card__service--internet">
        {props.internet ? (
          <React.Fragment>
            <img
              className="c-bundle-card__icon"
              src="https://internet.cox.com/svg/data-vis/internet-color.svg"
              alt="Internet included"
            />
            <p className="Internet__Speed">{props.internet}</p>
            <p className="Internet__Units">MBPS</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img
              className="c-bundle-card__icon c-bundle-card__not-included-icon"
              src="https://internet.cox.com/svg/data-vis/internet-blank.svg"
              alt="Internet is not included"
            />
            <p className="c-bundle-card__not-included">Int not included</p>
          </React.Fragment>
        )}
      </div>

      <div className="c-bundle-card__service c-bundle-card__service--tv">
        {props.tv ? (
          <React.Fragment>
            <img
              className="c-bundle-card__icon"
              src="https://internet.cox.com/svg/data-vis/tv-color.svg"
              alt="Tv included"
            />
            <p className="Tv__Channels">{props.tv}</p>
            <p className="Tv__Units">CHANNELS</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img
              className="c-bundle-card__icon c-bundle-card__not-included-icon"
              src="https://internet.cox.com/svg/data-vis/tv-blank.svg"
              alt="Tv is not included"
            />
            <p className="c-bundle-card__not-included">Tv not included</p>
          </React.Fragment>
        )}
      </div>

      <div className="c-bundle-card__Voice">
        {props.voice ? (
          <React.Fragment>
            <img
              className="c-bundle-card__icon"
              src="https://internet.cox.com/svg/data-vis/phone-color.svg"
              alt="Voice included"
            />
            <p className="Voice__Option">{props.voice}</p>
            <p className="Voice__Units">VOICE</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img
              className="c-bundle-card__icon c-bundle-card__not-included-icon"
              src="https://internet.cox.com/svg/data-vis/phone-blank.svg"
              alt="Voice is not included"
            />
            <p className="c-bundle-card__not-included">Voice not included</p>
          </React.Fragment>
        )}
      </div>
    </div>

    <div className="c-bundle-card__PricesAndTerms">
      <div className="c-bundle-card__Price">
        <h3 className="PricesAndTerms__Price">$ {props.price}</h3>
        <p className="PricesAndTerms__Agreement">{props.agreement}</p>
        <p className="c-bundle-card__TermsAndCond c-bundle-card__TermsAndCond--mobile">See Offer Details & Terms</p>
      </div>

      <div className="c-bundle-card__Discounts">
        <p className="Discount">
          Save {props.discount}% <span> Reg. ${props.regularPrice}</span>
        </p>
        <p className="c-bundle-card__TermsAndCond c-bundle-card__TermsAndCond--desktop">See Offer Details & Terms</p>
      </div>
    </div>

    <Details
      internet={["Up to 150 Mbps Download Speed", "Up to 10 Mbps Upload Speed"]}
      tv={["140+ Unique Channels"]}
      voice={false}
    />
    <OrderButton />
  </div>
);

export default BundleCard;
