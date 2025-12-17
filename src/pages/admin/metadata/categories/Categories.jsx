import React from "react";
import SearchAdmin from "../../../../components/admin/SearchAdmin";
import ModalCategory from "./ModalCategory";
import { useState } from "react";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import TableCategory from "./TableCategory";

const inner = { name: "", description: "" };
const Categories = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(inner);
  const [error, setError] = useState(inner);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    setCategory(inner);
  };
  const handleChangeInput = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    if (loading) return;
    if (!validation()) {
      return;
    }
    setLoading(true);
    category.id
      ? await updateDocument("categories", category)
      : await addDocument("categories", category);
    handleClose();
    setLoading(false);
  };

  const handleEdit = (row) => {
    handleClickOpen();
    setCategory(row);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const validation = () => {
    const newError = {};
    newError.name = category.name ? "" : "Name is required";
    newError.description = category.description
      ? ""
      : "Description is required";
    setError(newError);
    return Object.values(newError).every((x) => x === "");
  };

  return (
    <div>
      <SearchAdmin
        handleClickOpen={handleClickOpen}
        handleSearch={handleSearch}
        title={"ADD CATEGORY"}
        name={"List Categories"}
      />
      <ModalCategory
        open={open}
        handleChangeInput={handleChangeInput}
        category={category}
        handleSubmit={handleSubmit}
        error={error}
        handleClose={handleClose}
        loading={loading}
      />
      <TableCategory handleEdit={handleEdit} search={search} />
    </div>
  );
};

export default Categories;
