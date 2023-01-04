import React from "react";
import {ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@mui/material';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


export default function CandidateComponent () {
    return(
    <div>
         <ListItem>
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="happy">
                      <SentimentVerySatisfiedIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="sad">
                      < SentimentVeryDissatisfiedIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
                  <ListItemText
                    primary='Candidato'
                  />
                </ListItem>

    </div>
)
}