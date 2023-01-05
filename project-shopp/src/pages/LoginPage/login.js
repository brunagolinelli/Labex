import React from 'react'
import  Typography from '@mui/material/Typography'
import { LoginForm } from './style';
import { Button, TextField } from '@mui/material';
import PageTitle from '../../componets/page-title';
import useFrom from '../../hook/useFrom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoadingPage  = () => {

    const history = useHistory()

    const [form, onChangeInput] = useFrom({
        email:'', password:''
    })

    const onSubmitLogin = (event) => {
        event.preventDefault() 
        const body = {
            "email": form.email,
            "password": form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna/login', body).then((res)=>{
            window.localStorage.setItem('token', res.data.token)
        })

        history.push('/viagens')
    }

    return <div>
        
       <PageTitle title={'Bem vindo a área de administrador'} marginTop='100px'></PageTitle>
        <Typography variant='h6' gutterBottom>Faça seu login para iniciar a navegação</Typography>
        <LoginForm onSubmit={onSubmitLogin}>
            <label color='secundary'>Email</label>
            <TextField 
            name='email'
            value={form['email']}
            onChange={onChangeInput}
            type={'email'} label={'Email'}/>
            <label color='secundary'>Senha</label>
            <TextField 
            name='password'
            value={form['password']}
            onChange={onChangeInput}
            type={'password'} label={'senha'}/>
            <Button variant="contained" type={'submit'}>Entrar</Button>
        </LoginForm>

    </div>
}

export default LoadingPage;