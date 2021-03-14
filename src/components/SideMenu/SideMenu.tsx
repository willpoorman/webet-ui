import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText, { ListItemTextProps } from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EventIcon from "@material-ui/icons/Event";
import HomeIcon from "@material-ui/icons/Home";
import TableChartIcon from "@material-ui/icons/TableChart";
import Drawer from "@material-ui/core/Drawer";
import React, { Fragment, FunctionComponent } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
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

interface MenuItem {
  name: string;
  path: string;
  icon?: JSX.Element;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Events",
    path: "/events",
    icon: <EventIcon />,
  },
  {
    name: "Examples",
    path: "/examples",
    children: [
      {
        name: "DataGrid",
        path: "/examples/data-grid",
        icon: <TableChartIcon />,
      },
    ],
  },
];

interface MenuItemsProps {
  menuItems: MenuItem[];
  currentPageLocation: string;
  nestedListClassName: string;
}

const MenuItems: FunctionComponent<MenuItemsProps> = ({
  menuItems,
  currentPageLocation,
  nestedListClassName,
}) => {
  const menuItemLinks = menuItems.map((menuItem) => {
    let nestedLinks: JSX.Element | null = null;
    if (menuItem.children) {
      const childLinks = menuItem.children.map((nestedMenuItem) => {
        const selected = nestedMenuItem.path === currentPageLocation;

        return (
          <PageLink
            to={nestedMenuItem.path}
            listItemClassName={nestedListClassName}
            key={nestedMenuItem.name}
            icon={nestedMenuItem.icon}
            selected={selected}
          >
            {nestedMenuItem.name}
          </PageLink>
        );
      });

      nestedLinks = (
        <List component="div" disablePadding>
          {childLinks}
        </List>
      );
    }

    const selected = menuItem.path === currentPageLocation;
    return (
      <Fragment key={menuItem.name}>
        <PageLink key={menuItem.name} to={menuItem.path} icon={menuItem.icon} selected={selected}>
          {menuItem.name}
        </PageLink>
        {nestedLinks}
      </Fragment>
    );
  });

  return <>{menuItemLinks}</>;
};

const SideMenu: FunctionComponent<RouteComponentProps> = ({ location }) => {
  const classes = useStyles();
  const currentPageLocation = location.pathname;

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
        <MenuItems
          menuItems={menuItems}
          currentPageLocation={currentPageLocation}
          nestedListClassName={classes.nested}
        />
      </List>
    </Drawer>
  );
};
SideMenu.displayName = "SideMenu";

export default withRouter(SideMenu);
