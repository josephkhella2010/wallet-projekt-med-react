import React from "react";

export default function FormForCardDetails({
  handleSaveChange,
  newcardNummer,
  newholderName,
  newvalid,
  newccv,
  newvendor,
  setNewCardNumer,
  setNewHolderName,
  setNewValid,
  setNewCcv,
  setNewVendor,
  isAktiverat
}) {
  const isDisabled = isAktiverat ? true : false;
  const disabledBtn = isAktiverat ? "disabled" : "";

  return (
    <form className="input-container" onSubmit={handleSaveChange}>
      <label>
        <p>Card Number</p>
        <input
          type="text"
          placeholder="Card Number"
          value={newcardNummer}
          onChange={(e) => setNewCardNumer(e.target.value)}
          maxLength="16"
          disabled={isDisabled}
        />
      </label>
      <label>
        <p>Card Holder Name</p>
        <input
          type="text"
          placeholder="Card Holder Name"
          value={newholderName}
          onChange={(e) => setNewHolderName(e.target.value)}
          disabled={isDisabled}
        />
      </label>
      <div className="ccv-content">
        <label>
          <p>Valid Thru (MM/YY)</p>
          <input
            type="text"
            placeholder="MM/YY"
            value={newvalid}
            onChange={(e) => setNewValid(e.target.value)}
            maxLength="5"
            disabled={isDisabled}
          />
        </label>
        <label>
          <p>CCV</p>
          <input
            type="text"
            placeholder="CCV"
            value={newccv}
            onChange={(e) => setNewCcv(e.target.value)}
            maxLength="3"
            disabled={isDisabled}
          />
        </label>
      </div>
      <div className="select-content">
        <label>Vendor</label>
        <select
          value={newvendor}
          onChange={(e) => setNewVendor(e.target.value)}
          disabled={isDisabled}
        >
          <option value="">Select Card Issuer</option>
          <option value="Nordea">Nordea</option>
          <option value="SEB">SEB</option>
          <option value="Swed Bank">Swed Bank</option>
          <option value="Danske Bank">Danske Bank</option>
        </select>
      </div>
      <button type="submit" className={disabledBtn}>
        {disabledBtn
          ? "u should inactivate card to  be able to change details"
          : "Save Changes"}
      </button>
    </form>
  );
}
