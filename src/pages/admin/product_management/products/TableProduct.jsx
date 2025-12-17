import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { MdDelete, MdEdit } from "react-icons/md";
import { ProductContext } from "../../../../contexts/ProductProvider";
import { CategoryContext } from "../../../../contexts/CategoryProvider";
import { getOjectById } from "../../../../untils/reponsive";

const paginationModel = { page: 0, pageSize: 5 };
const TableProduct = () => {
  const products = useContext(ProductContext);
  const categories = useContext(CategoryContext);
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "categoryId", headerName: "Category", width: 200 , 
        renderCell: (params) => {
        const row = params.row;

        return (
          <div>{getOjectById(categories,row.categoryId)?.name}</div>
        )}
     },
    {
      field: "actions",
      headerName: "Action",
      width: 100,
      sortable: false,
      renderCell: (params) => {
        const row = params.row;

        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <IconButton color="primary" onClick={() => handleEdit(row)}>
              <MdEdit />
            </IconButton>

            <IconButton
              color="error"
              onClick={() => handleClickOpenDelete(row.id)}
            >
              <MdDelete />
            </IconButton>
          </div>
        );
      },
    },
  ];

  return (
    <Paper sx={{ height: 400, width: "100%", mt: 5 }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default TableProduct;
