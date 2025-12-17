import React, { useState } from "react";
import SearchAdmin from "../../../../components/admin/SearchAdmin";
import ModalProduct from "./ModalProduct";
import { addDocument } from "../../../../services/firebaseService";
import TableCategory from "./TableProduct";

const inner = { name: "", description: "", categoryId: "" };
const Products = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(inner);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(inner);

  const handleClickOpen = () => {
    setOpen(true);
    setProduct(inner);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (loading) return;
    if (!validation()) {
      return;
    }
    setLoading(true);
    await addDocument("products", product);
    handleClose();
    setLoading(false);
  };

  const validation = () => {
    const newError = {};
    newError.name = product.name ? "" : "Name is required";
    newError.description = product.description ? "" : "Description is required";
    newError.categoryId = product.categoryId ? "" : "CategoryId is required";
    setError(newError);
    return Object.values(newError).every((x) => x === "");
  };

  return (
    <div>
      <SearchAdmin
        title={"ADD PRODUCT"}
        handleClickOpen={handleClickOpen}
        name={"List Products"}
      />
      <ModalProduct
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        product={product}
        error={error}
        loading={loading}
        handleChangeInput={handleChangeInput}
      />
      <TableCategory />
    </div>
  );
};

export default Products;
