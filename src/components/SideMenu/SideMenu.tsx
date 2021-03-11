import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText, { ListItemTextProps } from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Drawer from "@material-ui/core/Drawer";
import React, { FunctionComponent } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

interface PageLinkProps extends Pick<RouterLinkProps, "to">, Pick<ListItemProps, "selected"> {
  icon?: JSX.Element | null;
  listItemClassName?: ListItemProps["className"];
  listItemTextClassName?: ListItemTextProps["className"];
}

const PageLink: FunctionComponent<PageLinkProps> = ({
  to,
  children,
  listItemClassName,
  listItemTextClassName,
  selected,
  icon,
}) => {
  if (icon === undefined) {
    icon = null;
  }

  return (
    <ListItem
      button
      to={to}
      component={RouterLink}
      className={listItemClassName}
      selected={selected}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText className={listItemTextClassName}>{children}</ListItemText>
    </ListItem>
  );
};

export function SideMenu() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      // open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <PageLink to="/">Home</PageLink>
        <PageLink to="/events">Events</PageLink>
        <PageLink to="/examples">Examples</PageLink>
        <List component="div" disablePadding>
          <PageLink to="/examples/data-grid" listItemClassName={classes.nested}>
            DataGrid
          </PageLink>
        </List>
      </List>
    </Drawer>
  );
}

export default SideMenu;
