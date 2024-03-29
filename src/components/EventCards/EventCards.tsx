import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { WeBetEvent } from "../../models";
import { classes } from "../../styles";
import { EventCard } from "../EventCard";

export const EventCards: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [events, setEvents] = useState<WeBetEvent[] | []>([]);

  useEffect(() => {
    setLoading(true);
    setErrorOccurred(false);

    axios
      .get<WeBetEvent[]>("/api/events/")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorOccurred(true);
      })
      .finally(() => setLoading(false));
  }, []);

  let content = <CircularProgress />;
  if (errorOccurred) {
    content = <div>Something went wrong</div>;
  } else if (!loading && events !== undefined && events !== null) {
    const cards = events.map((event: WeBetEvent) => {
      return (
        <Grid item xs={12} md={3} sm={6} key={event.id}>
          <EventCard
            name={event.name}
            description={event.tags.join(", ")}
            startDate={event.start_time}
            id={event.id}
          />
        </Grid>
      );
    });

    content = (
      <Grid container spacing={3}>
        {cards}
      </Grid>
    );
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" gutterBottom>
        Events
      </Typography>
      {content}
    </Paper>
  );
};
