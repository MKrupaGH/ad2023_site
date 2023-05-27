import React, { useEffect, useState } from "react";

function DateMenu({ handleOption }) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const datesFetch = async () => {
      const dates = await (await fetch("http://localhost:5000/test")).json();
      setDates(dates.data);
    };

    datesFetch();
  }, []);

  return (
    <div>
      <select
        className={"form-select form-select-lg mb-3"}
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
  );
}

export default DateMenu;
