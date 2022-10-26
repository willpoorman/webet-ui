import { styled } from "@mui/material/styles";

export const PREFIX = "webet";

export const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
  container: `${PREFIX}-container`,
  paper: `${PREFIX}-paper`,
  fixedHeight: `${PREFIX}-fixedHeight`,
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  nested: `${PREFIX}-nested`,
  eventCard: `${PREFIX}-eventCard`,
  matchCard: `${PREFIX}-matchCard`,
};

export const Root = styled("div")(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: "flex",
  },

  [`& .${classes.content}`]: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  [`& .${classes.container}`]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },

  [`& .${classes.fixedHeight}`]: {
    height: 240,
  },

  [`& .${classes.drawer}`]: {
    width: drawerWidth,
    flexShrink: 0,
  },

  [`& .${classes.drawerPaper}`]: {
    width: drawerWidth,
  },

  [`& .${classes.nested}`]: {
    paddingLeft: theme.spacing(4),
  },

  [`& .${classes.eventCard}`]: {},
  [`& .${classes.matchCard}`]: {},
}));

const drawerWidth = 240;
