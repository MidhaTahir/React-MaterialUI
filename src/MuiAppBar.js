import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Typography } from "@material-ui/core";

const MuiAppBar = () => {
  return (
    <>
      <AppBar color="primary">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">MUI CHEATSHEET</Typography>

          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MuiAppBar;
