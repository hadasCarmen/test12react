import { useState } from "react";
function FilterTerorist(props) {
  const {
    setSearchName,
    setSearchAttack,
    setStatus,
    setMostDangerousActive,
    mostDangerousActive,
  } = props;

  const handleClickDangerous = () => {
    setMostDangerousActive(!mostDangerousActive);
  };
  const handleChangeName = (e) => {
    const value = e.target.value;
    if (value === "") {
      setSearchName(null);
    } else {
      setSearchName(value);
    }
  };
  const handleChangeAttack = (e) => {
    const value = e.target.value;

    if (value === "") {
      setSearchAttack(null);
    } else {
      setSearchAttack(value);
    }
  };
  const handleChangeStatus = (e) => {
    const value = e.target.value;

    if (value === "") {
      setStatus(null);
    } else {
      setStatus(value);
    }
  };
  const optionList = ["Active", "Quiet", "Dead", "Israeli Agent"];
  return (
    <div>
      <input
        type="search"
        placeholder="search by Name..."
        onChange={(e) => handleChangeName(e)}
      />
      <input
        type="number"
        placeholder="search by Attacks..."
        onChange={(e) => handleChangeAttack(e)}
      />

      <select onChange={(e) => handleChangeStatus(e)}>
        <option key={"deafalt"} value=""></option>
        {optionList.map((opt, idx) => {
          return (
            <option key={idx} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
      <button onClick={(e) => handleClickDangerous()}>
        Most Dangerous Terrorist
      </button>
    </div>
  );
}

export default FilterTerorist;
