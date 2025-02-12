import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  numberId: string,
  date: string,
  status: string,
  price: string
) {
  return { numberId, date, status, price };
}

const rows = [
  createData("#3456_768", "October 17, 2023", "Delivered", "$1234.00"),
  createData("#3456_980", "October 11, 2023", "Delivered", "$345.00"),
  createData("#3456_120", "August 24, 2023", "Delivered", "$2345.00"),
  createData("#3456_030", "August 12, 2023", "Delivered", "$845.00"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#6C7275", fontWeight: "bold" }}>
              Number ID
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#6C7275", fontWeight: "bold" }}
            >
              Dates
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#6C7275", fontWeight: "bold" }}
            >
              Status
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#6C7275", fontWeight: "bold" }}
            >
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.numberId}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                height: 60,
              }}
            >
              <TableCell component="th" scope="row" sx={{ color: "#141718" }}>
                {row.numberId}
              </TableCell>
              <TableCell align="center" sx={{ color: "#141718" }}>
                {row.date}
              </TableCell>
              <TableCell align="center" sx={{ color: "#141718" }}>
                {row.status}
              </TableCell>
              <TableCell align="right" sx={{ color: "#141718" }}>
                {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
