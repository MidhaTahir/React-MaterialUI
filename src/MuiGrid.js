import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const MuiGrid = () => {
  return (
    <>
      {/* Grid can be a container or an item */}
      <Grid container spacing={2} justify="center">
        {/* We can make grid responsive adding in Grid item sizing as below */}
        <Grid item xs={3} sm={6}>
          <Paper style={{ height: 75, width: "100%" }} />
        </Grid>
        <Grid item xs={3} sm={6}>
          <Paper style={{ height: 75, width: "100%" }} />
        </Grid>
        <Grid item xs={3} lg={12}>
          <Paper style={{ height: 75, width: "100%" }} />
        </Grid>

        {/* if we want layout to dynamically update depending on the viewport we are on we can simply pass one viewport xs*/}
      </Grid>
    </>
  );
};

export default MuiGrid;
