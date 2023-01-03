import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete} from '@mui/icons-material';

const CandidatesList  = () => {
return <div> 
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }}  gutterBottom>
          Word of the Day
        </Typography>
            <List dense={true}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                       <Delete />
                    </IconButton>
                  }
                >
                  <ListItemText />
                </ListItem>
            </List>
      </CardContent>
     
    </Card>
</div>
}

export default CandidatesList;