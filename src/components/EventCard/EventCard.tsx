import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import { classes } from "../../styles";

interface EventCardProps {
  name: string;
  description: string;
  startDate?: string;
  id: number;
}

export const EventCard: FunctionComponent<EventCardProps> = ({ name, description, id }) => {
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
