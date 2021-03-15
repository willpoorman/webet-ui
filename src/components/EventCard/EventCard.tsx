import Typography from "@material-ui/core/Typography";
import React, { FunctionComponent } from "react";
import { useStyles } from "../../useStyle";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

interface EventCardProps {
  eventName: string;
  eventDescription: string;
  eventStartDate?: string;
  eventId?: number;
}

export const EventCard: FunctionComponent<EventCardProps> = (props) => {
  const { eventName, eventDescription } = props;
  const classes = useStyles();
  return (
    <Card className={classes.eventCard}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {eventName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {eventDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
