import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import UserContext from "../context/UserContext";
import MenuAppBar from "./Menu";
import TrackButton from "../components/TrackButton";
import StatsButton from "../components/StatsButton";
import "../App.css";

const HomePage = props => (
  <div>
    <MenuAppBar />
    <Grid container>
      <Grid item xs={12}>
        <UserContext.Consumer>
          {context => (
            <>
              <h2>Welcome Back, {context.user && context.user.firstName}!</h2>
            </>
          )}
        </UserContext.Consumer>
      </Grid>
      <Container>
        <Grid item xs={6}>
          <TrackButton />
        </Grid>
        <Grid item xs={6}>
          <StatsButton />
        </Grid>
      </Container>
    </Grid>
  </div>
);

export default HomePage;
