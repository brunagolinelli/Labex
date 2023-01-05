import { Button,  List, ListItem, ListItemText} from '@mui/material';
import React, { useState, useEffect } from 'react'
import PageTitle from '../../componets/page-title';
import { Link, NavLink } from 'react-router-dom';
import { CreatTripButtom, TripList, Container } from './styled';
import axios from 'axios';

const TripPage = () => {

  const [tripList, setTripList] = useState([])

  useEffect(()=>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna/trips').then((res)=>{
        setTripList (res.data.trips)
    }).catch((err)=>{
        console.log(err)
    })
}, [tripList])

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
                {tripList.map((list)=>{
                  return <ListItemText key={'list.id'} value={'list'}>{list.name}</ListItemText>
                })}
            </NavLink>
          </ListItem>
        </List>
        </TripList>
    </Container>
}

export default TripPage;