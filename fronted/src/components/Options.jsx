import React from "react";
import { fetchComplaints } from "../api/complaintsApi";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Options(props) {
  const { setList } = props;
  const [serchi, setSerchi] = useState();
  const [yeari1, setYeari1] = useState();
  const [yeari2, setYeari2] = useState();
  const navigate = useNavigate();
  async function cityOrCountryAndYear(e) {
    e.preventDefault();
    const filterList = await fetchComplaints();
    setList(
      filterList.filter((t) => {
        let goodFilter = true;
        if (serchi != null) {
          goodFilter =
            t.city.toLowerCase().includes(serchi.toLowerCase()) ||
            t.country_txt.toLowerCase().includes(serchi.toLowerCase());
        }
        if (yeari1 != null && goodFilter) {
          goodFilter = t.iyear > yeari1;
        }
        if (yeari2 != null && goodFilter) {
          goodFilter = t.iyear < yeari2;
        }

        return goodFilter;
      }),
    );
  }
  return (
    <>
      <div>
        <form action="">
          <label htmlFor="search">search:</label>
          <input
            onChange={(e) => setSerchi(e.target.value)}
            type="text"
            id="search"
            name="search"
          />
          <label htmlFor="year1">{"year>"}</label>
          <input
            onChange={(e) => setYeari1(e.target.value)}
            type="number"
            id="year1"
            name="year1"
          />
          <label htmlFor="year2">{"year<"}</label>
          <input
            onChange={(e) => setYeari2(e.target.value)}
            type="number"
            id="year2"
            name="year2"
          />
          <button onClick={cityOrCountryAndYear} type="submit">
            filter
          </button>
        </form>
        <button onClick={() => navigate("./question")}>page 2</button>
      </div>
    </>
  );
}
