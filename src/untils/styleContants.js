export const inputStyle = {
  backgroundColor: "#000",
  marginTop: "20px",
  width: "100%",

  /* TEXT COLOR - áp dụng cho cả input & textarea */
  "& .MuiInputBase-input": {
    color: "#fff",
  },

  "& .MuiInputLabel-root": {
    color: "#aaa",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#90caf9",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00e5ff",
      boxShadow: "0 0 6px #00e5ff",
    },
  },

  "& label.Mui-focused": {
    color: "#00e5ff",
  },
};

export const btn = {
  padding: "10px 24px",
  borderRadius: "12px",
  marginTop: "20px",
  fontWeight: "600",
  textTransform: "none",
  fontSize: "16px",
  background: "linear-gradient(45deg, #00e5ff, #2979ff)",
  boxShadow: "0 0 12px rgba(0, 229, 255, 0.5)",
  transition: "0.25s",

  "&:hover": {
    background: "linear-gradient(45deg, #2979ff, #00e5ff)",
    boxShadow: "0 0 18px rgba(0, 229, 255, 0.8)",
    transform: "translateY(-2px)",
  },

  "&:active": {
    transform: "scale(0.97)",
  },
};
export const btnDis = {
  padding: "10px 24px",
  borderRadius: "12px",
  marginTop: "20px",
  fontWeight: "600",
  textTransform: "none",
  fontSize: "16px",
  background: "linear-gradient(45deg, #4a4a4a, #1f1f1f)",
  boxShadow: "0 0 12px rgba(0, 229, 255, 0.5)",
  transition: "0.25s",
  "&:hover": {
    background: "linear-gradient(45deg, #2979ff, #00e5ff)",
    boxShadow: "0 0 18px rgba(0, 229, 255, 0.8)",
    transform: "translateY(-2px)",
  },

  "&:active": {
    transform: "scale(0.97)",
  },
};
