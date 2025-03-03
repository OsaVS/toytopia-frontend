import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetOrdersQuery } from "../features/order/orderApi";
import Loader from "./Loader";

const OrderTable = () => {
  const { data, isLoading } = useGetOrdersQuery(undefined);

  if (isLoading) return <Loader />;

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#6C7275", fontWeight: "bold" }}>
              Order ID
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "#6C7275", fontWeight: "bold" }}
            >
              Order Date
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
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((order: any) => (
            <TableRow
              key={order._id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                height: 60,
              }}
            >
              <TableCell component="th" scope="row" sx={{ color: "#141718" }}>
                {order.orderNumber}
              </TableCell>
              <TableCell align="center" sx={{ color: "#141718" }}>
                {new Date(order.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell align="center" sx={{ color: "#141718" }}>
                {order.orderStatus}
              </TableCell>
              <TableCell align="center" sx={{ color: "#141718" }}>
                Rs. {order.subTotal}.00
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
