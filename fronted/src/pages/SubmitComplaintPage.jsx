import { useNavigate } from "react-router";
import ComplaintForm from "../components/ComplaintForm";
import { fetchComplaints } from "../api/complaintsApi.js";
import { useEffect, useState } from "react";
// import { createComplaint } from "../api/complaintsApi";

function SubmitComplaintPage() {
  // const navigate = useNavigate();
  const [list, setList] = useState([]);

  async function handleSubmit() {
    setList(await fetchComplaints());
    // navigate("/");

    return list;
  }
  useEffect(async () => {
    handleSubmit();
  }, []);

  return (
    <div>
      <h2>Submit Complaint</h2>
      <div>
        {list.map((terorist) => {
          return <div  >
            <div>{terorist.eventid}</div>
            <div>{terorist.iyear}</div>
            <div>{terorist.country_txt}</div>
            <div>{terorist.region_txt}</div>
            <div>{terorist.city}</div>
            <div>{terorist.summary}</div>
            <div>{terorist.attacktype1_txt}</div>
            <div>{terorist.targtype1_txt}</div>
            <div>{terorist.targsubtype1_txt}</div>
            <div>{terorist.corp1}</div>
            <div>{terorist.target1}</div>
            <div>{terorist.motive}</div>
            </div>;
        })}
      </div>
      {/* <ComplaintForm onSubmit={handleSubmit} /> */}
    </div>
  );
}
export default SubmitComplaintPage;
