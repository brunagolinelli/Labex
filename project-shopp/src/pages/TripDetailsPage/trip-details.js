import React from 'react'
import PageTitle from '../../componets/page-title';
import CandidatesList from './candidates-list';
import TripInfo from './trip-info';
import { Container } from './styled';

const TripDetails  = () => {
    return <div>
        <PageTitle title='Detalhes da Viagem '></PageTitle>
        <Container>
        <TripInfo >
        </TripInfo >
        <CandidatesList></CandidatesList>
        </Container>
    </div>
}

export default TripDetails;