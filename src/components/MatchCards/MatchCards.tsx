import React, { FunctionComponent, useEffect, useState } from "react";
import { CircularProgress, Grid, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { Match } from "../../models";
import { useStyles } from "../../useStyle";
import { MatchCard } from "../MatchCard";

export interface MatchCardsProps {
  eventId: number;
}

export const MatchCards: FunctionComponent<MatchCardsProps> = ({ eventId }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [matches, setMatches] = useState<Match[] | []>([]);

  useEffect(() => {
    setLoading(true);
    setErrorOccurred(false);

    axios
      .get<Match[]>("/api/matches", {
        params: {
          event: eventId,
        },
      })
      .then((response) => {
        setMatches(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorOccurred(true);
      })
      .finally(() => setLoading(false));
  }, [eventId]);

  let content = <CircularProgress />;
  if (errorOccurred) {
    content = <div>Something went wrong</div>;
  } else if (!loading && matches !== undefined && matches !== null) {
    const cards = matches.map((match: Match) => {
      const matchDescription = (
        <div>
          {match.tags.join(", ")}
          <p>{match.notes}</p>
        </div>
      );

      return (
        <Grid item xs={12} md={3} sm={6} key={match.id}>
          <MatchCard
            id={match.id}
            name={match.name}
            description={matchDescription}
            startDate={match.start_time}
            eventId={match.event}
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
        Matches
      </Typography>
      {content}
    </Paper>
  );
};
