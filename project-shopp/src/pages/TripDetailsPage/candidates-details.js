import { Typography } from "@mui/material";
import React from "react";

export function CandidatesDetails (props) {
    return(
        <Typography variant="body1">
            <strong>{props.infoName}</strong> : {props.info}

        </Typography>
    )
}