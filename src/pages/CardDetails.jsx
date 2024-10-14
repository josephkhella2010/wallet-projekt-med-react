import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LocationComponent from "../components/LocationComponent";
import { logo } from "../components/logoArr";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails, updateDetails } from "../redux/cardSlice/cardSlice";
import SettingIcon from "../components/SettingIcon";
import FormForCardDetails from "../components/FormForCardDetails";

export default function CardDetails() {
  const data = useSelector((store) => store.cardData.cardDetails);
  const dispatch = useDispatch();
  const location = useLocation();
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
  } = location.state;

  const filtered = logo.find((logoItem) => logoItem.name.includes(vendor));
  const color = filtered ? filtered.background : "";

  const [newcardNummer, setNewCardNumer] = useState(cardNummer);
  const [newholderName, setNewHolderName] = useState(holderName);
  const [newvalid, setNewValid] = useState(valid);
  const [newccv, setNewCcv] = useState(ccv);
  const [newvendor, setNewVendor] = useState(vendor);

  const disabledBtn = isAktiverat ? "disabled" : "";
  const navigate = useNavigate();

  /////////////////////////////////////////////////////////////////////////////
  // Function to handle saving changes to the card
  function handleSaveChange(e) {
    e.preventDefault();

    if (isNaN(newcardNummer) || isNaN(newccv)) {
      alert("Please it must be number");
      return;
    }
    if (newcardNummer.length > 16 || newcardNummer.length < 16) {
      alert("card number must be 16 number");
      return;
    }

    const updatedCard = {
      cardNummer: newcardNummer,
      holderName: newholderName,
      valid: newvalid,
      ccv: newccv,
      vendor: newvendor,
      radioValue,
      isAktiverat,
      id,
      ind
    };
    const updatedCardDetails = data.map((card) =>
      card.ind === ind ? updatedCard : card
    );
    dispatch(updateDetails(updatedCard));
    localStorage.setItem("cardlist", JSON.stringify(updatedCardDetails));
    navigate("/");
  }

  /////////////////////////////////////////////////////////////////////////////
  // Function to toggle isAktiverat, making one card active and others inactive

  function handleAktivate() {
    const clickedCard = data.find((card) => card.ind === ind);

    if (clickedCard.isAktiverat) {
      const updatedCardDetails = data.map((card) => ({
        ...card,
        isAktiverat: false
      }));

      dispatch(updateDetails(updatedCardDetails));
      localStorage.setItem("cardlist", JSON.stringify(updatedCardDetails));
      console.log("All cards deactivated:", updatedCardDetails);
    } else {
      const updatedCardDetails = data.map((card) => {
        if (card.ind === ind) {
          return { ...card, isAktiverat: true };
        } else {
          return { ...card, isAktiverat: false };
        }
      });

      dispatch(updateDetails(updatedCardDetails));
      localStorage.setItem("cardlist", JSON.stringify(updatedCardDetails));
      console.log(
        "Only the clicked card is activated, others deactivated:",
        updatedCardDetails
      );
    }

    window.location.href = "/";
  }

  /////////////////////////////////////////////////////////////////////////////
  // Function to handle card deletion
  function handleDelete() {
    dispatch(deleteDetails(ind));
    navigate("/");
  }

  return (
    <div className="cardDetail-page">
      <div className="wrapper">
        <SettingIcon />

        <button onClick={handleAktivate}>
          {isAktiverat ? "Inaktivate Card" : "Activate Card"} Card
        </button>

        <button onClick={handleDelete} className={`${disabledBtn}`}>
          {!isAktiverat
            ? "Delete  Card"
            : "Please Inactivate Card to be able to delete"}
        </button>

        <LocationComponent
          newcardNummer={newcardNummer}
          newholderName={newholderName}
          newvalid={newvalid}
          newccv={newccv}
          newvendor={newvendor}
          radioValue={radioValue}
        />

        <FormForCardDetails
          handleSaveChange={handleSaveChange}
          newcardNummer={newcardNummer}
          newholderName={newholderName}
          newvalid={newvalid}
          newccv={newccv}
          newvendor={newvendor}
          setNewCardNumer={setNewCardNumer}
          setNewHolderName={setNewHolderName}
          setNewValid={setNewValid}
          setNewCcv={setNewCcv}
          setNewVendor={setNewVendor}
          isAktiverat={isAktiverat}
        />
      </div>
    </div>
  );
}
