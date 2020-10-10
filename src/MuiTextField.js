import React from "react";
import TextField from "@material-ui/core/TextField";

const MuiTextField = () => {
  return (
    <div>
      <TextField 
        variant="outlined" 
        color="secondary"
        label="Name"
      />{" "}
      <TextField 
        variant="outlined" 
        color="secondary"
        label="Email"
        type="email"
        placeholder="test@test.com"
      />{" "}
      <TextField
        variant="outlined"
        color="secondary"
        type="date"
      />{" "}
      <TextField
        variant="outlined"
        color="secondary"

        type="time"
      />
    </div>
  );
};

export default MuiTextField;
