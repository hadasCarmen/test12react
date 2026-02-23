import { useState } from "react";
import FilterTerror from "../components/FilterTerror.jsx";
import Options from "../components/Options.jsx";
function SubmitComplaintPage() {
  const [list, setList] = useState([]);
  return (
    <>
      <Options setList={setList} />
      <FilterTerror list={list} setList={setList} />
    </>
  );
}
export default SubmitComplaintPage;
