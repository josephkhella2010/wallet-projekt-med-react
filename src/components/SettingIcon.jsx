import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";

import { Link } from "react-router-dom";

export default function SettingIcon() {
  return (
    <div className="settting-content">
      <Link to="/" title="Back to home" className="setting-icon back">
        <TiArrowBack />
      </Link>
      <Link to="/setting">
        <IoSettingsSharp className="setting-icon" title="setting" />
      </Link>
    </div>
  );
}
