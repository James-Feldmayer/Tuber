import React from 'react';
import { Grid } from '@material-ui/core'

function ItemBox(props) {
    return (
        <Grid item style={{padding: "10px"}}>
            <div style={{
                padding: "10px", 
                backgroundColor: props.color, 
                color: "white", 
                width: "110px",
                height: "110px"
            }}>
                <h4>{props.isPrice ? "$" : ""}{props.amount}</h4>
                <p>{props.type}</p>
            </div>
        </Grid>
    );
}

export default ItemBox;