import React from "react";
import CardComponent from "../components/CardComponent";
import { Link } from "react-router-dom";
import SettingIcon from "../components/SettingIcon";

export default function HomePage() {
  return (
    <div className="Home-Page">
      <div className="wrapper">
        <SettingIcon />
        <h1>Cards that u have</h1>
        <CardComponent />
        <div className="button">
          <Link to="/addCard" className="link">
            <button>Add New Card</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
