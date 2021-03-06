import React, { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../useStyle";

interface EventCardProps {
  name: string;
  description: string;
  startDate?: string;
  id: number;
}

export const EventCard: FunctionComponent<EventCardProps> = ({ name, description, id }) => {
  const classes = useStyles();
  const eventDetailsUrl = `/event/${id}`;

  return (
    <Card className={classes.eventCard}>
      <CardContent>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={RouterLink} to={eventDetailsUrl}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
