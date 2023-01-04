import React from 'react'
import  Typography from '@mui/material/Typography'
import { Button, TextField } from '@mui/material';
import PageTitle from '../../componets/page-title';
import { CreateTripsForm } from './style';

const CreateTrip  = () => {
    return <div>
    <PageTitle title={'Nova viagem'} marginTop='100px'></PageTitle>
    <Typography variant='h6' gutterBottom>Preencha os campos para criar uma nova viagem</Typography>
    <CreateTripsForm>
        <label color='secundary'>Nome</label>
        <TextField type={'text'} label={'Nome'}/>
        <label color='secundary'>Planeta</label>
        <TextField type={'text'} label={'Planeta'}/>
        <label color='secundary'>Data</label>
        <TextField type={'date'}/>
        <label color='secundary'>Descrição</label>
        <TextField type={'text'} label={'Faça uma breve descrição'}/>
        <label color='secundary'>Duração</label>
        <TextField type={'number'} label={'Duração em dias'} solo/>
        <Button variant="contained" type='submit'>Criar</Button>
    </CreateTripsForm>
    </div>
}

export default CreateTrip;