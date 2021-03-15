import { Grid, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React, { FunctionComponent, useEffect, useState } from "react";
import { WeBetEvent } from "../../models";
import { useStyles } from "../../useStyle";
import { EventCard } from "../EventCard";

const eventsFromApi: WeBetEvent[] = [
  {
    name: "Summerslam",
    start_time: "2021-03-01:20:00:00",
    end_time: "2021-03-01:24:00:00",
    tags: [
      {
        name: "WWE",
      },
      {
        name: "PPV",
      },
    ],
  },
  {
    name: "Hell in A Cell",
    start_time: "2021-04-01:20:00:00",
    end_time: "2021-04-01:24:00:00",
    tags: [
      {
        name: "WWE",
      },
      {
        name: "PPV",
      },
    ],
  },
  {
    name: "Wrestlemania",
    start_time: "2021-05-01:20:00:00",
    end_time: "2021-05-01:24:00:00",
    tags: [
      {
        name: "WWE",
      },
      {
        name: "PPV",
      },
    ],
  },
];

export const EventCards: FunctionComponent = () => {
  const classes = useStyles();
  const [events, setEvents] = useState<WeBetEvent[] | []>([]);

  const mockAxios = new MockAdapter(axios, { delayResponse: 500 });
  mockAxios.onGet("/fake/path").reply(200, eventsFromApi);

  useEffect(() => {
    axios.get("/fake/path").then((response) => {
      setEvents(response.data);
    });
  });

  const cards = events.map((event: WeBetEvent) => {
    return (
      <Grid item xs={12} md={3} sm={6}>
        <EventCard
          eventName={event.name}
          eventDescription={event.tags.map((tag) => tag.name).join(",")}
          eventStartDate={event.start_time}
          key={event.name}
        />
      </Grid>
    );
  });

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" gutterBottom>
        Events
      </Typography>
      <Grid container spacing={3}>
        {cards}
      </Grid>
    </Paper>
  );
};
