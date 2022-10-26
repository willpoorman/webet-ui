import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { EventCards } from "../components/EventCards";
import { classes } from "../styles";

export function Home() {
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
