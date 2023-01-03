import React from 'react'
import { Button } from '@mui/material';
import { ButtonHomePage, Container } from './styled';
import { Link } from 'react-router-dom';
import PageTitle from '../../componets/page-title';

const HomePage  = () => {
    return <Container>
    
    <PageTitle title={'Labex'}></PageTitle>

    <ButtonHomePage>
        <Link to='login'>
        <Button variant={'outlined'} color='primary'>Área do Administrador</Button>
        </Link>
        <Link to='/inscrição'>
        <Button variant={'contained'} color='secondary'>Quero me Candidatar</Button>
        </Link>
    </ButtonHomePage>

    </Container>
}

export default HomePage;