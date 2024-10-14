import React from "react";
import { Link } from "react-router-dom";
import { logo } from "./logoArr";
import ChipAndWifi from "./ChipAndWifi";
import PayType from "./payType";
import LogoBank from "./LogoBank";

export default function CardFilteredInAktivate({ filteredByInAktivitat }) {
  const hasInactiveCards = filteredByInAktivitat.some(
    (item) => item.isAktiverat == false
  );
  return (
    <>
      {filteredByInAktivitat && (
        <>
          {hasInactiveCards && <h1>InAktivated Cards</h1>}

          {filteredByInAktivitat.map((item) => {
            const {
              cardNummer,
              holderName,
              valid,
              vendor,
              isAktiverat,
              id,
              radioValue
            } = item;

            const filtered = logo.find((logoItem) =>
              logoItem.name.includes(vendor)
            );
            const color = filtered ? filtered.background : "";

            return (
              <div key={id} className="card" style={{ background: color }}>
                <Link to={`/cardDetail/${id}`} state={item} className="li">
                  {!isAktiverat ? <h2>Inaktiverat</h2> : <h2>Aktiverat</h2>}
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
            );
          })}
        </>
      )}
    </>
  );
}
