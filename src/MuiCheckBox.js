import React, { useState } from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const MuiCheckBox = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      {/* 1. All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the <label> element (FormControlLabel). */}
      {/* inside control pass checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            color="primary"
            icon={<CheckCircleIcon />}
            checkedIcon={<CheckBoxIcon />}
            // if we wanna pass props beside default one we will gonna pass input props
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="Testing Checkbox"
      />

      {/* 2. When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. aria-label, aria-labelledby, title) via the inputProps property. 
        <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
        />*/}
    </div>
  );
};

export default MuiCheckBox;
