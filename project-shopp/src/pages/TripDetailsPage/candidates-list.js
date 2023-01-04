import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { List} from '@mui/material';
import CandidateComponent from './components/candidateItem';
import { ListPadding } from './styled';


const CandidatesList  = () => {
return <div> 
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }}  gutterBottom>
         Lista de Candidatos
        </Typography>
          <ListPadding>
            <List>
             <CandidateComponent></CandidateComponent>
            </List>
            </ListPadding>
      </CardContent>
     
    </Card>
</div>
}

export default CandidatesList;