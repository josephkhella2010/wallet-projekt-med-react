import React from "react";
import { logo } from "./logoArr";

export default function LogoBank({ vendor }) {
  const filtered = logo.find((logoItem) => logoItem.name.includes(vendor));
  return (
    <>
      {filtered && (
        <div className="header">
          <div className="logo">
            <img src={filtered.url} alt="Logo not found" />
          </div>
          <h2>{filtered.name}</h2>
        </div>
      )}
    </>
  );
}
