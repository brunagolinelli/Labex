import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TripInfoItems } from './trip-info-items';

const TripInfo  = () => {
return <div> 
    
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          Informações da Viagem
        </Typography>
        <TripInfoItems infoName = "Nome" info = "Viagem para Marte"/>
        <TripInfoItems infoName = "Planeta" info = "Marte"/>
        <TripInfoItems infoName = "Data" info = "01/07/2020"/>
        <TripInfoItems infoName = "Descrição" info = "Viagem maneira para colonizar marte"/>
        <TripInfoItems infoName = "DUração" info = "228"/>
      </CardContent>
    </Card>

     </div>
}

export default TripInfo;