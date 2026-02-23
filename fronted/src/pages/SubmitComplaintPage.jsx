// import { useNavigate } from "react-router";
// import ComplaintForm from "../components/ComplaintForm";
// import { fetchComplaints } from "../api/complaintsApi.js";
// import { useEffect, useState } from "react";
// import "./SubmitComplaintPage.css";
// function SubmitComplaintPage() {
//   const [list, setList] = useState([]);

//   async function handleSubmit() {
//     setList(await fetchComplaints());
//     return list;
//   }
//   useEffect(() => {
//     handleSubmit();
//   }, []);

//   return (
//     <div>
//       <h2>Submit Complaint</h2>
//       <div>
//         {list.slice(0,20).map((terorist,idx) => {
//           if (idx%2==0) {
            
//             return (
//               <div className="line zugi" key={self.crypto.randomUUID()}>
//                 <div>{terorist.eventid}</div>
//                 <div>{terorist.iyear}</div>
//                 <div>{terorist.country_txt}</div>
//                 <div>{terorist.region_txt}</div>
//                 <div>{terorist.city}</div>
//                 <div>{terorist.summary}</div>
//                 <div>{terorist.attacktype1_txt}</div>
//                 <div>{terorist.targtype1_txt}</div>
//                 <div>{terorist.targsubtype1_txt}</div>
//                 <div>{terorist.corp1}</div>
//                 <div>{terorist.target1}</div>
//                 <div>{terorist.motive}</div>
//               </div>
//             );
//           }else{
            
//             return (
//               <div className="line " key={self.crypto.randomUUID()}>
//                 <div>{terorist.eventid}</div>
//                 <div>{terorist.iyear}</div>
//                 <div>{terorist.country_txt}</div>
//                 <div>{terorist.region_txt}</div>
//                 <div>{terorist.city}</div>
//                 <div>{terorist.summary}</div>
//                 <div>{terorist.attacktype1_txt}</div>
//                 <div>{terorist.targtype1_txt}</div>
//                 <div>{terorist.targsubtype1_txt}</div>
//                 <div>{terorist.corp1}</div>
//                 <div>{terorist.target1}</div>
//                 <div>{terorist.motive}</div>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// }
// export default SubmitComplaintPage;
import { useNavigate } from "react-router";
import ComplaintForm from "../components/ComplaintForm";
import { fetchComplaints } from "../api/complaintsApi.js";
import { useEffect, useState } from "react";
import FilterTerror from "../components/FilterTerror.jsx";
import Options from "../components/Options.jsx";
function SubmitComplaintPage() {
  const [list, setList] = useState([]);
  return (
    <>
    <Options list={list} setList={setList}/>
    <FilterTerror list={list} setList={setList}/>
    </>
  )}
export default SubmitComplaintPage;
