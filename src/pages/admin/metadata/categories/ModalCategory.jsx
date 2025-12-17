import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { btn, btnDis, inputStyle } from "../../../../untils/styleContants";
import { CircularProgress, TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalCategory({
  open,
  category,
  handleClose,
  handleSubmit,
  handleChangeInput,
  error,
  loading,
}) {
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
        <DialogTitle sx={{ pb: 0 }}>
          {category.id ? "EDIT CATEGORY" : "ADD CATEGORY"}
        </DialogTitle>
        <DialogContent>
          <TextField
            sx={inputStyle}
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            value={category.name}
            onChange={handleChangeInput}
            error={!!error.name}
            helperText={error.name}
          />
          <TextField
            multiline
            rows={2}
            sx={inputStyle}
            id="outlined-basic"
            label="Description"
            name="description"
            variant="outlined"
            value={category.description}
            onChange={handleChangeInput}
            error={!!error.description}
            helperText={error.description}
          />
          <Button
            fullWidth
            sx={loading ? btnDis : btn}
            onClick={handleSubmit}
            disabled={loading} // disable khi loading
            startIcon={
              loading ? <CircularProgress color="inherit" size={18} /> : null
            }
          >
            {loading
              ? "PROCESSING..."
              : category.id
              ? "EDIT CATEGORY"
              : "ADD CATEGORY"}
          </Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default ModalCategory;
