import React from "react";
import CardComponent from "../components/CardComponent";
import { Link } from "react-router-dom";
import SettingIcon from "../components/SettingIcon";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const data = useSelector((store) => store.cardData);
  const navigate = useNavigate();

  function handleAdd() {
    if (data.cardDetails.length < 4) {
      navigate("/addCard");
    } else {
      alert("u cannot add more than 4 card");
      return;
    }
  }
  return (
    <div className="Home-Page">
      <div className="wrapper">
        <SettingIcon />
        <h1>Cards that u have</h1>
        <CardComponent />
        <div className="button">
          {/*  <Link to="/addCard" className="link">
            <button onClick={handleAdd}>Add New Card</button>
          </Link> */}
          <button onClick={handleAdd}>Add New Card</button>
        </div>
      </div>
    </div>
  );
}
