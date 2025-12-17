import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { btn, btnDis, inputStyle } from "../../../../untils/styleContants";
import {
  Autocomplete,
  CircularProgress,
  Popper,
  TextField,
} from "@mui/material";
import { CategoryContext } from "../../../../contexts/CategoryProvider";
import styled from "@emotion/styled";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomPopper = styled(Popper)({
  zIndex: 1300,
});

const PopperTop = (props) => {
  const { anchorEl } = props;
  return (
    <CustomPopper
      {...props}
      placement="top-start"
      style={{
        width: anchorEl ? anchorEl.clientWidth : undefined,
      }}
    />
  );
};
function ModalProduct({
  open,
  handleClose,
  handleSubmit,
  handleChangeInput,
  error,
  product,
  loading,
}) {
  const categories = React.useContext(CategoryContext);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#121212",
            color: "#fff",
            borderRadius: "12px",
            padding: "8px 0",
          },
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ pb: 0 }}>ADD PRODUCT</DialogTitle>
        <DialogContent>
          <TextField
            sx={inputStyle}
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            onChange={handleChangeInput}
            helperText={error.name}
            error={!!error.name}
            value={product.name}
          />

          <TextField
            multiline
            rows={2}
            sx={inputStyle}
            id="outlined-basic"
            label="Description"
            name="description"
            variant="outlined"
            onChange={handleChangeInput}
            helperText={error.description}
            error={!!error.description}
            value={product.description}
          />
          <Autocomplete
            sx={inputStyle}
            options={categories}
            fullWidth
            PopperComponent={PopperTop}
            value={categories.find((e) => e.id == product.categoryId) || null}
            onChange={(event, value) => {
              handleChangeInput({
                target: { name: "categoryId", value: value.id },
              });
            }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Category"
                helperText={error.categoryId}
                error={!!error.categoryId}
              />
            )}
          />
          <Button
            onClick={handleSubmit}
            fullWidth
            sx={loading ? btnDis : btn}
            disabled={loading} // disable khi false
            startIcon={
              loading ? <CircularProgress color="inherit" size={18} /> : null
            }
          >
            {loading ? "PROCESSING..." : false ? "EDIT PRODUCT" : "ADD PRODUCT"}
          </Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default ModalProduct;
