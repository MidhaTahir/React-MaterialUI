import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6888, #FF8E53)',
        border: 0,
        borderRadius:15,
        color: 'white',
        padding: '20px 30px',
        marginTop: 15
    }
})


const MuiOwnStyling = () => {
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.root}>Custom Styled Button</Button>
        </div>
    )
}

export default MuiOwnStyling
