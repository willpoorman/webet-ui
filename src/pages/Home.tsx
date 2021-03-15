import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "../useStyle";
import { EventCards } from "../components/EventCards";

export function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <EventCards />
        </Grid>
      </Grid>
    </Container>
  );
}
