import Typography from "@material-ui/core/Typography";
import React, { FunctionComponent } from "react";
import { useStyles } from "../../useStyle";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

interface EventCardProps {
  name: string;
  description: string;
  startDate?: string;
  id?: number;
}

export const EventCard: FunctionComponent<EventCardProps> = ({ name, description, id }) => {
  const classes = useStyles();
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
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
