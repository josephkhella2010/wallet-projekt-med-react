import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../redux/cardSlice/cardSlice";
import { useNavigate } from "react-router-dom";
import SettingIcon from "../components/SettingIcon";
import CardForAddCardPage from "../components/CardForAddCardPage";
import AddCardForm from "../components/AddCardForm";

export default function AddCard() {
  const [cardNummer, setCardNumer] = useState("");
  const [holderName, setHolderName] = useState("");
  const [valid, setValid] = useState("");
  const [ccv, setCcv] = useState("");
  const [vendor, setVendor] = useState("");
  const [radioValue, setRadioValue] = useState("");
  //const [cardList, setCardList] = useState([]);
  const data = useSelector((store) => store.cardData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Function to handle adding the card
  function handleCard(e) {
    e.preventDefault();
    if (
      !cardNummer ||
      !ccv ||
      !holderName ||
      !valid ||
      !vendor ||
      !radioValue
    ) {
      alert("Please fill out all fields correctly!");
      return;
    }
    if (isNaN(cardNummer) || isNaN(ccv)) {
      alert("Please it must be number");
      return;
    }

    if (cardNummer.length > 16 || cardNummer.length < 16) {
      alert("card number must be 16 number");
      return;
    }
    const newCard = {
      cardNummer,
      holderName,
      valid,
      ccv,
      vendor,
      radioValue,
      isAktiverat: false,
      id: data.cardDetails.length + 1,
      ind: Date.now()
    };
    if (data.cardDetails.length < 4) {
      dispatch(addDetails(newCard));
      //setCardList(data);
      navigate("/");
    } else {
      alert("u cannot add more than 4 card");
      return;
    }
  }

  return (
    <div className="add-card">
      <div className="wrapper">
        <SettingIcon />
        <h1>Add Card</h1>
        <CardForAddCardPage
          cardNummer={cardNummer}
          holderName={holderName}
          valid={valid}
          vendor={vendor}
          radioValue={radioValue}
        />
        <AddCardForm
          handleCard={handleCard}
          cardNummer={cardNummer}
          holderName={holderName}
          valid={valid}
          vendor={vendor}
          ccv={ccv}
          radioValue={radioValue}
          setCardNumer={setCardNumer}
          setHolderName={setHolderName}
          setValid={setValid}
          setCcv={setCcv}
          setVendor={setVendor}
          setRadioValue={setRadioValue}
        />
      </div>
    </div>
  );
}
