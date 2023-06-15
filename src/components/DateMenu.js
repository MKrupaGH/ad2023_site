import React, { useEffect, useState } from "react";

import "../styles/date-menu.css";

import logo from "../images/logo.png";
function DateMenu({ handleOption }) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const datesFetch = async () => {
      const dates = await (
        await fetch("https://private-committee-production.up.railway.app/test")
      ).json();
      setDates(dates.data);
    };

    datesFetch();
  }, []);

  return (
    <div className="logo-select">
      <img src={logo} alt="" />
      <div className="select-window">
        <select
          className={"select-option form-select form-select-lg"}
          aria-label=".form-select-lg example"
          name=""
          id=""
          onChange={(e) => handleOption(e)}
        >
          <option>Select date</option>
          {dates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DateMenu;
