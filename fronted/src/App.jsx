import "./App.css";
import FilterTerorist from "./components/FilterTerorist";
import TerroristList from "./components/TeroristList";

import { useState } from "react";

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchAttack, setSearchAttack] = useState(null);
  const [status, setStatus] = useState(null);
  const [mostDangerousActive, setMostDangerousActive] = useState(false);
  return (
    <>
      <FilterTerorist
        setSearchName={setSearchName}
        setSearchAttack={setSearchAttack}
        setStatus={setStatus}
        setMostDangerousActive={setMostDangerousActive}
        mostDangerousActive={mostDangerousActive}
      />
      <TerroristList
        searchName={searchName}
        searchAttack={searchAttack}
        status={status}
        mostDangerousActive={mostDangerousActive}
      />
    </>
  );
}

export default App;