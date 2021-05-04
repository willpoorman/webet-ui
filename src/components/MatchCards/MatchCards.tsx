import React, { FunctionComponent, useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { Match } from "../../models";
import { useStyles } from "../../useStyle";
import { MatchCard } from "../MatchCard";

export interface MatchCardsProps {
  eventId: number;
}

export const MatchCards: FunctionComponent<MatchCardsProps> = ({ eventId }) => {
  const classes = useStyles();
  const [matches, setMatches] = useState<Match[] | []>([]);

  useEffect(() => {
    axios
      .get<Match[]>("/api/matches", {
        params: {
          event: eventId,
        },
      })
      .then((response) => {
        setMatches(response.data);
      });
  }, [eventId]);

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

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" gutterBottom>
        Matches
      </Typography>
      <Grid container spacing={3}>
        {cards}
      </Grid>
    </Paper>
  );
};
