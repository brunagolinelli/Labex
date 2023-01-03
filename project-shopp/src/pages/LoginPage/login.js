import React from 'react'
import  Typography from '@mui/material/Typography'
import { LoginForm } from './style';
import { Button, TextField } from '@mui/material';
import PageTitle from '../../componets/page-title';
const LoadingPage  = () => {
    return <div>
        
       <PageTitle title={'Bem vindo a área de administrador'} marginTop='100px'></PageTitle>
        <Typography variant='h6' gutterBottom>Faça seu login para iniciar a navegação</Typography>
        <LoginForm>
            <label color='secundary'>Email</label>
            <TextField type={'email'} label={'Email'}/>
            <label color='secundary'>Senha</label>
            <TextField type={'password'} label={'senha'} solo/>
            <Button variant="contained" type='submit'>Entrar</Button>
        </LoginForm>

    </div>
}

export default LoadingPage;