import { dataTerorist } from "../data/terrorist_list";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TeroristRow from "./TeroristRow";
import Paper from "@mui/material/Paper";



function TerroristList(props) {
//   const { searchName, searchAttack, status, mostDangerousActive } = props;
//   function maxDangerous(){
//     let max = 0;
//     let teroristMax = 0;

//   dataTerorist.forEach((terorist) => {
//     if (
//       terorist.attacksCount > max &&
//       terorist.imageUrl &&
//       terorist.status.toLowerCase() === 'active'
//     ) {
//       max = terorist.attacksCount;
//       teroristMax = terorist
//     }
//   });
//   return [teroristMax];
// }
  // const FilterTerorist = mostDangerousActive ? maxDangerous() : dataTerorist.filter((t) => {
  //   let filterAttack = true;
  //   let filterName = true;
  //   let filterStatus = true;
    
  //   if (searchAttack) {
  //     filterAttack = t.attacksCount === Number(searchAttack);
  //   }
  //   if (searchName) {
  //     filterName = t.name.toLowerCase().includes(searchName.toLowerCase());
  //   }
  //   if (status) {
  //     filterStatus = t.status.toLowerCase() === status.toLowerCase();
  //   }
  //   return filterAttack && filterName && filterStatus;
  // });

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>organization</TableCell>
              <TableCell>attacksCount</TableCell>
              <TableCell>status</TableCell>
              <TableCell>Summary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {FilterTerorist.map((terorist, idx) => {
              return <TeroristRow key={idx} terorist={terorist} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TerroristList;