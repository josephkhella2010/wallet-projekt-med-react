import React from "react";
import { logo } from "./logoArr";
import ChipAndWifi from "./ChipAndWifi";
import PayType from "./payType";
import LogoBank from "./LogoBank";

export default function LocationComponent({
  newcardNummer,
  newholderName,
  newvalid,
  newccv,
  newvendor,
  radioValue
}) {
  const filteredLogo = logo.find((item) => item.name === newvendor);
  const cardcolor = filteredLogo ? filteredLogo.background : "";
  return (
    <>
      <div className="card" style={{ background: cardcolor }}>
        {filteredLogo && (
          <div className="header">
            <div className="logo">
              <img src={filteredLogo.url} alt="" />
            </div>
            <h2>{filteredLogo.name}</h2>
          </div>
        )}
        <ChipAndWifi />
        <div className="middle-content">
          <p>{newcardNummer}</p>
        </div>
        <div className="bottom-content">
          <div className="name-valid">
            <div className="name">
              <h4>cardholder Name</h4>
              <h4>{newholderName}</h4>
            </div>
            <div className="valid">
              <h4>Valid THRU</h4>

              <h4>{newvalid}</h4>
            </div>
          </div>
        </div>
        <PayType radioValue={radioValue} />
      </div>
    </>
  );
}
