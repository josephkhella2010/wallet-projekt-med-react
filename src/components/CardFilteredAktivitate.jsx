import React from "react";
import { Link } from "react-router-dom";
import { logo } from "./logoArr";
import ChipAndWifi from "./ChipAndWifi";
import PayType from "./payType";
import LogoBank from "./LogoBank";

export default function CardFilteredAktivitate({ filteredByAktivitat }) {
  if (!filteredByAktivitat) {
    return <h2>No active cards found</h2>;
  }

  const {
    cardNummer,
    holderName,
    valid,
    ccv,
    vendor,
    isAktiverat,
    id,
    ind,
    radioValue
  } = filteredByAktivitat;

  const filtered = logo.find((logoItem) => logoItem.name.includes(vendor));
  const color = filtered ? filtered.background : "";

  return (
    <>
      <h1>Activated Cards</h1>

      <div className="card" style={{ background: color }}>
        <Link
          to={`/cardDetail/${id}`}
          state={filteredByAktivitat}
          className="li"
        >
          {!isAktiverat ? <h2>Inactivated</h2> : <h2>Activated</h2>}
          <LogoBank vendor={vendor} filtered={filtered} />
          <ChipAndWifi />

          <div className="middle-content">
            <p>{cardNummer}</p>
          </div>

          <div className="bottom-content">
            <div className="name-valid">
              <div className="name">
                <h4>Cardholder Name</h4>
                <h4>{holderName}</h4>
              </div>
              <div className="valid">
                <h4>Valid Thru</h4>
                <h4>{valid}</h4>
              </div>
            </div>
          </div>
          <PayType radioValue={radioValue} />
        </Link>
      </div>
    </>
  );
}
