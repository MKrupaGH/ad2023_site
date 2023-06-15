import { useState } from "react";
import "./App.css";
import DateMenu from "./components/DateMenu";
import { LineChart } from "./components/LineChart";

function App() {
  const [data, setData] = useState(null);

  const line = data === null ? "" : <LineChart data={data} />;

  async function handleOption(e) {
    const params = await fetch(
      `https://private-committee-production.up.railway.app/date?date=${e.target.value}`
    );

    const values = await params.json();

    setData(values.data);
  }

  return (
    <div className="App">
      <div className="menu-container">
        <DateMenu handleOption={handleOption} />
      </div>
      <div className="chart-container">{line}</div>
    </div>
  );
}

export default App;
