import React from "react";
import { payType } from "./logoArr";

export default function PayType({ radioValue }) {
  const filteredIcon = payType.find((item) => item.name === radioValue);

  return (
    <div className="pay-type">
      {filteredIcon ? (
        <img src={filteredIcon.url} alt={`${radioValue} logo`} />
      ) : (
        ""
      )}
    </div>
  );
}
