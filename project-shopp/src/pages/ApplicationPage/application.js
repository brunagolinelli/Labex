import React, { useEffect, useState } from 'react'
import  Typography from '@mui/material/Typography'
import { Button, MenuItem, TextField } from '@mui/material';
import PageTitle from '../../componets/page-title';
import {ApplicationForm } from './style';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import useFrom from '../../hook/useFrom';




function ApplicationPage ()  {

    const [trips, setTrips] = useState([])

    const [form, onChangeInput] = useFrom({
        name:'', 
        age:'', 
        description:'', 
        occupation:'', 
        country:'', 
        trip: ''
    })

    const onSubmitApplication = (event) => {
        event.preventDefault() 
        const body = {
            "name": form.name,
            "age": form.age,
            "applicationText": form.description,
            "profession": form.occupation,
            "country": form.country
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna/trips/${form.trip.id}/apply`, body)
        console.log(form)
    }

    useEffect(()=>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna/trips').then((res)=>{
            setTrips (res.data.trips)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    return <div>
    <PageTitle title={'Aplicação para viagem'} marginTop='100px'></PageTitle>
    <Typography variant='h6' gutterBottom>Preencha o formulário de aplicação para de candidatar à uma viagem</Typography>
    <ApplicationForm onSubmit={onSubmitApplication}>
        <label color='secundary'>Nome</label>
        <TextField
        value={form['name']}
        name={'name'} 
        onChange={onChangeInput}
        type={'text'} label={'Nome'}/>
        <label color='secundary'>Idade</label>
        <TextField
        value={form['age']}
        name={'age'} 
        onChange={onChangeInput}
        type={'text'} label={'Idade'}/>
        <label color='secundary'>Poque sou um(a) bom(a) candidato(a)</label>
        <TextField
        value={form['description']}
        name={'description'} 
        onChange={onChangeInput}
        type={'text'} helperText='explique porque você é um(a) bom(a) candidato(a)'/>
        <label color='secundary'>Profissão</label>
        <TextField 
        type={'text'}
        value={form['occupation']}
        onChange={onChangeInput}
        name={'occupation'}/>
        <label color='secundary'>País</label>
        <FormControl>
        <InputLabel id="pais">País</InputLabel>
        <Select labelId="pais"
        type={'text'}
        value={form['country']}
        name={'country'}
        onChange={onChangeInput}>
            <MenuItem value='brasil'>Brasil</MenuItem>
            <MenuItem value='eua'>EUA</MenuItem>
            <MenuItem value='canada'>Canada</MenuItem>
            <MenuItem value='espanha'>Espanha</MenuItem>
            <MenuItem value='portugual'>Portugual</MenuItem>
        </Select>
      </FormControl>
      <label color='secundary'>Viagem</label>
        <FormControl>
        <InputLabel id="select-trip">Viagem</InputLabel>
        <Select
        labelId="select-trip"
        type={'text'}
        value={form['trip']}
        name={'trip'}
        onChange={onChangeInput}>

            {trips.map((trip)=>{
               return <MenuItem key={trip.id} value={trip} > {trip.name}</MenuItem>
            })}

        </Select>
      </FormControl>
        
        <Button variant="contained"  type={'submit'}>Criar</Button>
    </ApplicationForm>
    </div>
}

export default ApplicationPage;