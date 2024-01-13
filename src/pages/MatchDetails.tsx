import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Match } from "../models";
import { classes } from "../styles";

interface DetailsProps {
  match: Match;
}

const Details: FunctionComponent<DetailsProps> = ({ match }) => {
  return (
    <Paper className={classes.paper}>
      <Typography variant="h1" component="h1" gutterBottom>
        {match.name}
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Start time: </strong>
            {match.start_time}
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Status: </strong>
            {match.status}
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Bet Type: </strong>
            {match.bet_type}
          </Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Tags: </strong>
            {match.tags.join(", ")}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export const MatchDetails: FunctionComponent = () => {
  const { matchId, eventId } = useParams<Record<"matchId" | "eventId", string>>();
  const [loading, setLoading] = useState(true);
  const [match, setMatch] = useState<Match>();
  const [errorOccurred, setErrorOccurred] = useState(false);

  useEffect(() => {
    setLoading(true);
    setErrorOccurred(false);
    axios
      .get<Match>(`/api/matches/${matchId}`, {
        params: {
          event: eventId,
        },
      })
      .then((response) => {
        setMatch(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorOccurred(true);
      })
      .finally(() => setLoading(false));
  }, [matchId, eventId]);

  let content = <CircularProgress />;
  if (errorOccurred) {
    content = <div>Something Went Wrong</div>;
  } else if (!loading && match !== undefined && match !== null) {
    content = (
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Details match={match} />
        </Grid>
        <Grid xs={12}>{/* <MatchCards eventId={match.id} /> */}</Grid>
      </Grid>
    );
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      {content}
    </Container>
  );
};
