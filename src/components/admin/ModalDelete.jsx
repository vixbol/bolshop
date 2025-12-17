import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalDelete = ({ open, handleCloseDelete, deletedCategory }) => {
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
            width: "450px",
            maxWidth: "90%",
          },
        }}
        keepMounted
        onClose={handleCloseDelete}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ pb: 0 }}>DELETE CATEGORY</DialogTitle>

        <DialogContent>
          <p>Bạn có chắc muốn xoá?</p>

          <Button
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#d32f2f",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#b71c1c",
              },
            }}
            onClick={deletedCategory}
          >
            DELETE CATEGORY
          </Button>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ModalDelete;
