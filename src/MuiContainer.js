import React from "react";
import Container from "@material-ui/core/Container";

const MuiContainer = ({ children }) => {
  return (
    <div>
      <Container maxWidth="md">
        {/* xs, sm, md , lg */}
        {/* we can also apply media query inside maxWidth */}
        {/* represents max-width on our page and add padding on left and right */}
        {children}
      </Container>
    </div>
  );
};

export default MuiContainer;
