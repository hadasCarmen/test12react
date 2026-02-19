import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function TeroristRow(props) {
  const { terorist } = props;
  const {
    imageUrl,
    name,
    organization,
    attacksCount,
    status,
    relationToIsraelSummary,
  } = terorist;

  return (
    <TableRow>
      <TableCell>
        <img src={imageUrl ? imageUrl : "https://i.ibb.co/LDt5Kcgw/29.png"} />
        {name}
      </TableCell>
      <TableCell>{organization}</TableCell>
      <TableCell>{attacksCount}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>{relationToIsraelSummary}</TableCell>
    </TableRow>
  );
}

export default TeroristRow;