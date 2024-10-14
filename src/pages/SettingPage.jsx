import React, { useEffect, useState } from "react";
import { addMode, deleteDisAktivate } from "../redux/cardSlice/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SettingPage() {
  const [modeList, setModeList] = useState("");
  const mode = useSelector((store) => store.cardData.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((store) => store.cardData.cardDetails);

  /////////////////////////////////////////////////////////////////////////
  function handleMode() {
    dispatch(addMode(modeList));
    navigate("/");
  }

  //////////////////////////////////////////////////////////////////////////////////
  // delete all disactivated
  function handleDelete() {
    dispatch(deleteDisAktivate(false));
    navigate("/");
  }

  ///////////////////////////////////////////////////////////////////////////////7
  return (
    <div className="setting-page wrapper">
      <div className="top-content">
        <h2>Theme</h2>
        <select
          onChange={(e) => {
            setModeList(e.target.value);
          }}
        >
          <option value="">välj tema</option>
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="green">green</option>
        </select>
        <button onClick={handleMode}>save change</button>
      </div>
      <button onClick={handleDelete}>Delete all inactive cards</button>
    </div>
  );
}
