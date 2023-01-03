import { Typography } from "@mui/material";
import React from "react";

export function TripInfoItems (props) {
    return(
        <Typography variant="body1">
            <strong>{props.infoName}</strong> : {props.info}

        </Typography>
    )
}

