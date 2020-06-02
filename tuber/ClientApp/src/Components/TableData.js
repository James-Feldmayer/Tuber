import React from 'react';
import { TableRow, TableCell, Button } from '@material-ui/core'
import { Link as RouterLink } from "react-router-dom";

function TableData(props) {
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
            <TableCell><Button style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
        </TableRow>
    );
}

export default TableData;