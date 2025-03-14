import React from "react";
import { useGetAllProductsQuery, useDeleteProductMutation } from "../../features/product/productApi";
import Loader from "../../components/Loader";
import { ProductData } from "../../types/product";
import DeleteConfirmModal from "../../components/DeleteConfirmModal";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { successMessage } from "../../helpers/ToastHelper";

const ProductList = () => {
  const { data, isLoading, refetch } = useGetAllProductsQuery(undefined);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [deleteProduct, {isLoading:deleteLoading}] = useDeleteProductMutation();
  const [productId, setProductId] = React.useState<string | null>(null);
  
  const handleDelete = async () => {

    console.log(productId);
    await deleteProduct(productId);
    successMessage("Product deleted successfully");
    refetch();
    setIsDeleteModalOpen(false);
  };

  if (isLoading || deleteLoading) {
    return <Loader />;
  }

  return (
    <>
      <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#6C7275", fontWeight: "bold" }}>
                    Product Code
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ color: "#6C7275", fontWeight: "bold" }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ color: "#6C7275", fontWeight: "bold" }}
                  >
                    Category
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ color: "#6C7275", fontWeight: "bold" }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ color: "#6C7275", fontWeight: "bold" }}
                  >
                    Stock
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ color: "#6C7275", fontWeight: "bold" }}
                  >
                    action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data.map((product: ProductData) => (
                  <TableRow
                    key={product._id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      height: 60,
                    }}
                  >
                    <TableCell align="left" component="th" scope="row" sx={{ color: "#141718" }}>
                      {product.productCode}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row" sx={{ color: "#141718" }}>
                      {product.name}
                    </TableCell>
                    <TableCell align="left" sx={{ color: "#141718" }}>
                      {product.category}
                    </TableCell>
                    <TableCell align="left" sx={{ color: "#141718" }}>
                      Rs. {product.price}.00
                    </TableCell>
                    <TableCell align="left" sx={{ color: "#141718" }}>
                      {product.stock}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row" sx={{ color: "#141718" }}>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                            setProductId(product._id);
                            setIsDeleteModalOpen(true);
                          }
                        }
                      >
                        <DeleteIcon
                          sx={{ fontSize: 18, color: "grey", "&:hover": { color: "red" } }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <DeleteConfirmModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={handleDelete}
            title="Delete Product"
            message="Are you sure you want to delete this product? This action cannot be undone."
          />
    </>
  );
};

export default ProductList;
