import { useState } from "react";
import "./App.css";
import DateMenu from "./components/DateMenu";
import { LineChart } from "./components/LineChart";

function App() {
  const [data, setData] = useState(null);

  const line = data === null ? "" : <LineChart data={data} />;

  async function handleOption(e) {
    const params = await fetch(
      `http://localhost:5000/date?date=${e.target.value}`
    );

    const values = await params.json();

    setData(values.data);
  }

  console.log(data);

  return (
    <div className="App">
      <DateMenu handleOption={handleOption} />
      {line}
    </div>
  );
}

export default App;
