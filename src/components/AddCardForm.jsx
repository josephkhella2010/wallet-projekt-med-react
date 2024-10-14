import React from "react";

export default function AddCardForm({
  handleCard,
  cardNummer,
  holderName,
  valid,
  vendor,
  ccv,
  radioValue,
  setCardNumer,
  setHolderName,
  setValid,
  setCcv,
  setVendor,
  setRadioValue
}) {
  return (
    <form className="input-container" onSubmit={handleCard}>
      <label className="label">
        <p>Card Number</p>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNummer}
          onChange={(e) => setCardNumer(e.target.value)}
          maxLength="16"
        />
      </label>
      <label className="label">
        <p>Card Holder Name</p>
        <input
          type="text"
          placeholder="Card Holder Name"
          value={holderName}
          onChange={(e) => setHolderName(e.target.value)}
        />
      </label>
      <div className="ccv-content">
        <label className="label">
          <p>Valid Thru (MM/YY)</p>
          <input
            type="text"
            placeholder="MM/YY"
            value={valid}
            onChange={(e) => setValid(e.target.value)}
            maxLength={5}
          />
        </label>
        <label className="label">
          <p>CCV</p>
          <input
            type="text"
            placeholder="CCV"
            value={ccv}
            onChange={(e) => setCcv(e.target.value)}
            maxLength="3"
          />
        </label>
      </div>
      <div className="select-content">
        <label>Vendor</label>
        <select value={vendor} onChange={(e) => setVendor(e.target.value)}>
          <option value="">Välj kortutgivare</option>
          <option value="Nordea">Nordea</option>
          <option value="SEB">SEB</option>
          <option value="Swed Bank">Swed Bank</option>
          <option value="Danske Bank">Danske Bank</option>
        </select>
      </div>
      <div id="radio-btn">
        <h4> choose type of Card</h4>
        <div className="radion-section">
          <label htmlFor="MasterCard" className="radio-label">
            <input
              type="radio"
              name="MasterCard"
              id="MasterCard"
              value="MasterCard"
              checked={radioValue === "MasterCard"}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <p>MasterCard</p>
          </label>
          <label htmlFor="VisaCard" className="radio-label">
            <input
              type="radio"
              name="VisaCard"
              id="VisaCard"
              value="VisaCard"
              checked={radioValue === "VisaCard"}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <p>VisaCard</p>
          </label>
          <label htmlFor="PayPal" id="label" className="radio-label">
            <input
              type="radio"
              name="PayPal"
              id="PayPal"
              value="PayPal"
              checked={radioValue === "PayPal"}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <p>PayPal</p>
          </label>
        </div>
      </div>
      <div className="button">
        <button type="submit">Add Card</button>
      </div>
    </form>
  );
}
