import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useContext, useState } from "react";
import { CategoryContext } from "../../../../contexts/CategoryProvider";
import { IconButton } from "@mui/material";
import { MdDelete, MdEdit } from "react-icons/md";
import ModalDelete from "../../../../components/admin/ModalDelete";
import { deleteDocument } from "../../../../services/firebaseService";

const TableCategory = ({ handleEdit, search }) => {
  const categories = useContext(CategoryContext);
  const [open, setOpen] = useState(false);
  const [idDelete, setIdDelete] = useState("");
  const handleClickOpenDelete = (id) => {
    setOpen(true);
    setIdDelete(id);
  };
  const handleCloseDelete = () => {
    setOpen(false);
  };

  const deletedCategory = async () => {
    await deleteDocument("categories", idDelete);
    handleCloseDelete();
  };
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Description", width: 500 },
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

  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <>
      <Paper sx={{ height: 400, width: "100%", mt: 5 }}>
        <DataGrid
          rows={categories.filter((e) =>
            e.name.toLowerCase().includes(search.toLowerCase())
          )}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
      <ModalDelete
        open={open}
        deletedCategory={deletedCategory}
        handleCloseDelete={handleCloseDelete}
      />
    </>
  );
};

export default TableCategory;
