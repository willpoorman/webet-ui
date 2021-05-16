import React, { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../useStyle";

interface MatchCardProps {
  name: string;
  description: string | JSX.Element;
  id: number;
  eventId: number;
  startDate?: string;
}

export const MatchCard: FunctionComponent<MatchCardProps> = ({
  name,
  description,
  id,
  eventId,
}) => {
  const classes = useStyles();
  const matchDetailsUrl = `/event/${eventId}/match/${id}`;

  return (
    <Card className={classes.matchCard}>
      <CardContent>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={RouterLink} to={matchDetailsUrl}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
