import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchCards } from "../components/MatchCards";
import { WeBetEvent } from "../models";
import { useStyles } from "../useStyle";

interface DetailsProps {
  event: WeBetEvent;
}

const Details: FunctionComponent<DetailsProps> = ({ event }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h1" component="h1" gutterBottom>
        {event.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        <strong>Start time: </strong>
        {event.start_time}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        <strong>Tags: </strong>
        {event.tags.join(", ")}
      </Typography>
    </Paper>
  );
};

export const EventDetails: FunctionComponent = () => {
  const classes = useStyles();
  const { id } = useParams<Record<"id", string>>();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState<WeBetEvent>();
  const [errorOccurred, setErrorOccurred] = useState(false);

  useEffect(() => {
    setLoading(true);
    setErrorOccurred(false);
    axios
      .get<WeBetEvent>(`/api/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorOccurred(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  let content = <CircularProgress />;
  if (errorOccurred) {
    content = <div>Something Went Wrong</div>;
  } else if (!loading && event !== undefined && event !== null) {
    content = (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Details event={event} />
        </Grid>
        <Grid item xs={12}>
          <MatchCards eventId={event.id} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      {content}
    </Container>
  );
};
