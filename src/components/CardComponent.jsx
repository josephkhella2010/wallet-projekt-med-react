import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logo } from "./logoArr";
import CardFilteredAktivitate from "./CardFilteredAktivitate";
import CardFilteredInAktivate from "./CardFilteredInAktivate";

export default function CardComponent() {
  const data = useSelector((store) => store.cardData);
  const filteredByAktivitat = data.cardDetails.find(
    (item) => item.isAktiverat == true
  );
  const filteredByInAktivitat = data.cardDetails.filter(
    (item) => item.isAktiverat == false
  );

  return (
    <>
      <CardFilteredAktivitate filteredByAktivitat={filteredByAktivitat} />
      <CardFilteredInAktivate filteredByInAktivitat={filteredByInAktivitat} />
    </>
  );
}
