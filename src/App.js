import React from "react";
import "./App.css";
import MuiButton from "./MuiButton";
import MuiCheckBox from "./MuiCheckBox";
import MuiTextField from "./MuiTextField";
import MuiOwnStyling from "./MuiOwnStyling";
import MuiThemeProvider from "./MuiThemeProvider";
import "fontsource-roboto"; // yarn add fontsource-roboto
import Typography from "@material-ui/core/Typography";
import MuiContainer from "./MuiContainer";
import MuiGrid from "./MuiGrid";
import MuiAppBar from "./MuiAppBar";

function App() {
  return (
    <MuiContainer>
      <div className="App">
        <header className="App-header">
          <MuiAppBar />
          {/* h3 styling with different component (here div below) */}
          <Typography variant="h3" component="div">
            Welcome To MUI
          </Typography>
          <Typography variant="subtitle1">Learning MaterialUi</Typography>
          <MuiGrid />
          <MuiTextField />
          <MuiCheckBox />
          <MuiButton />
          <MuiOwnStyling />
          <hr></hr>
          <hr></hr>
          <MuiThemeProvider />
        </header>
      </div>
    </MuiContainer>
  );
}

export default App;
