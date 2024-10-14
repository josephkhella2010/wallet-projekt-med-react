import React from "react";
import { useSelector } from "react-redux";
import { logo } from "./logoArr";
import ChipAndWifi from "./ChipAndWifi";
import PayType from "./payType";
import LogoBank from "./LogoBank";

export default function CardForAddCardPage({
  cardNummer,
  holderName,
  valid,
  vendor,
  radioValue
}) {
  /////////////////////////////////////////////////////////////////
  const data = useSelector((store) => store.cardData);
  const filteredForLogo = logo.find((item) => item.name === vendor);
  const cardColor = filteredForLogo ? filteredForLogo.background : "";
  /////////////////////////////////////////////////////////////////
  return (
    <div className="card" style={{ background: cardColor }}>
      {filteredForLogo ? (
        <LogoBank vendor={vendor} filteredForLogo={filteredForLogo} />
      ) : (
        <div className="header">
          <div className="logo">
            <img src="/bank.jpg" alt="non found" />
          </div>
          <h2>Bank</h2>
        </div>
      )}
      <ChipAndWifi />

      <div className="middle-content">
        <input
          type="text"
          disabled
          placeholder="xxxxxxxxxxxxxxxx"
          value={cardNummer}
        />
      </div>
      <div className="bottom-content">
        <div className="name-valid">
          <div className="name">
            <p>cardholder Name</p>
            <input
              type="text"
              value={holderName}
              disabled
              placeholder="john smith"
            />
          </div>
          <div className="valid">
            <p>Valid THRU</p>

            <input type="text" value={valid} disabled placeholder="00/00" />
          </div>
        </div>
      </div>
      <PayType radioValue={radioValue} />
    </div>
  );
}
