import React from "react";
import Button from "@material-ui/core/Button";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 24,
      marginBottom: 15,
    },
  },
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});

const MuiThemeProvider = () => {
  return (
    <div>
      {/* Theme Provider provides one consistent theme for whole application */}
      <ThemeProvider theme={theme}>
        {/* Pass in all components inside ThemeProvider in real actual app */}
        <Typography variant="h1">Custom Theme</Typography>
        <Button color="secondary" variant="contained">
          Provider Theme
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default MuiThemeProvider;
