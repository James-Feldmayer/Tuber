import React from 'react';
import { TableRow, TableCell, Button } from '@material-ui/core'
import { Link as RouterLink } from "react-router-dom";

function TableData(props) {
    var buttons;
    if (props.category === "Upcoming") {
        buttons = <Button style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>Cancel</Button>
    } else {
        buttons = <div>
            <Button component={RouterLink} to="/Review" style={{backgroundColor: "#7ACFD6", color:"white", fontWeight: "bold"}}>Review</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button style={{backgroundColor: "#000000", color:"white", fontWeight: "bold"}}>Dispute</Button>
            </div>
    }

    return (
        <TableRow>
            <TableCell>
                <div>
                    {props.title}<br />{props.location}
                </div>
            </TableCell>
            <TableCell>
                <div>
                    {props.date}<br />{props.time}
                </div>
            </TableCell>
            <TableCell>{props.totalAttendees} people</TableCell>
            <TableCell>${props.price}</TableCell>
            <TableCell>
                <div>
                    {props.guideName}<br />(Guide)
                </div>
            </TableCell>
            <TableCell>
                {buttons}
            </TableCell>
        </TableRow>
    );
}

export default TableData;