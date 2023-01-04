import React from 'react'
import  Typography from '@mui/material/Typography'
import { Button, TextField } from '@mui/material';
import PageTitle from '../../componets/page-title';
import {ApplicationForm } from './style';

const ApplicationPage  = () => {
    return <div>
    <PageTitle title={'Aplicação para viagem'} marginTop='100px'></PageTitle>
    <Typography variant='h6' gutterBottom>Preencha o formulário de aplicação para de candidatar à uma viagem</Typography>
    <ApplicationForm>
        <label color='secundary'>Nome</label>
        <TextField type={'text'} label={'Nome'}/>
        <label color='secundary'>Idade</label>
        <TextField type={'text'} label={'Planeta'}/>
        <label color='secundary'>Poque sou um(a) bom(a) candidato(a)</label>
        <TextField type={'text'} helperText='explique porque você é um(a) bom(a) candidato(a)'/>
        <label color='secundary'>Profissão</label>
        <TextField type={'text'}/>
        <label color='secundary'>País</label>
        <TextField type={'text'} solo/>
        <Button variant="contained" type='submit'>Criar</Button>
    </ApplicationForm>
    </div>
}

export default ApplicationPage;