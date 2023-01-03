import { CssBaseline } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import styled from "styled-components";
import ApplicationPage from "./pages/ApplicationPage/application";
import CreateTrip from "./pages/CreateTripPage/create-trip";
import HomePage from "./pages/HomePage/home";
import LoginPage from "./pages/LoginPage/login";
import TripDetails from "./pages/TripDetailsPage/trip-details";
import TripPage from "./pages/TripsListPage/trip-list";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
`

function App() {
  return (
    <Router>
      <CssBaseline>
      <AppContainer>
        <Switch>
          <Route exact path="/viagens">
            <TripPage />
          </Route>
          <Route exact path="/viagens/detalhes">
            <TripDetails />
          </Route>
          <Route exact path="/viagens/criar">
            <CreateTrip/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/inscrição">
            <ApplicationPage />
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
          </Switch>
      </AppContainer>
    </CssBaseline>
    </Router>
  )
}

export default App;

