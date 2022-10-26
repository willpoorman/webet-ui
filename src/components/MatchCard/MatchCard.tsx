import { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { classes } from "../../styles";

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
