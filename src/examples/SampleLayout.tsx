import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import clsx from "clsx";
import { classes } from "../styles";

export function SampleLayout() {
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            {/* <Chart /> */}
            <div>Chart</div>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            {/* <Deposits /> */}
            <div>Deposits</div>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {/* <Orders /> */}
            <div>Orders</div>
          </Paper>
        </Grid>
      </Grid>
      <Box pt={4}>{/* <Copyright /> */}</Box>
    </Container>
  );
}
