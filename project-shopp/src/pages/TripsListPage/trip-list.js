import { Button,  List, ListItem, ListItemText} from '@mui/material';
import React from 'react'
import PageTitle from '../../componets/page-title';
import { Link, NavLink } from 'react-router-dom';
import { CreatTripButtom, TripList, Container } from './styled';

const TripPage = () => {
    return <Container> 
        
        <PageTitle title = {'Lista de Viagens'}></PageTitle>
       <CreatTripButtom>
        <Link to='/viagens/criar'>
        <Button variant='contained' aling = 'center'>Criar viagens</Button>
        </Link>
        </CreatTripButtom>
        <TripList>
        <List>
          <ListItem disablePadding>
            <NavLink to = '/viagens/detalhes'>
              <ListItemText primary="Pacote para o Caribe" />
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink to = '/viagens/detalhes'> 
              <ListItemText primary="Pacote para o Nordeste" />
            </NavLink>
          </ListItem>
        </List>
        </TripList>
    </Container>
}

export default TripPage;