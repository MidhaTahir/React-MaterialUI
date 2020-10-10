import React from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from '@material-ui/core/Button';
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from '@material-ui/icons/Delete';

function MuiButton() {
  return (
    <div>
      <ButtonGroup variant="contained" color="primary" size="large">
        <Button
          href="#" 
          // endIcon={<SaveIcon />}>
          startIcon={<SaveIcon />}>
          Save
        </Button> {' '}
        
        <Button
          startIcon={<DeleteIcon />}
          onClick={()=> alert("Sure?")} >
          Discard
        </Button>
        </ButtonGroup>


        {/* We dont need to pass color variant to individual buttons if we are using ButtonGroup */}

        {/* <ButtonGroup>
        <Button
          href="#" 
          variant="contained" 
          color="primary" 
          size="small"
          // endIcon={<SaveIcon />}>
          startIcon={<SaveIcon />}>
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          onClick={()=> alert("hello")} variant="contained" 
          color="secondary" 
          // disabled
          style={{
            fontSize: 24
          }}
          size="large">
          Discard
        </Button>
        </ButtonGroup> */}
    </div>
  );
}

export default MuiButton;