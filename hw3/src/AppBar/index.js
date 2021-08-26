import { AppBar as MaterialUiAppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: "15px",
    color: theme.palette.background.default,
    textDecoration: "none",
  },

  activeLink: {
    color: "#4caf50",
  },

  appBar: {
    marginBottom: "5px",
    alignItems: 'center',

  },
}));

const routes = [
  {
    pathTitle: "Home",
    path: "/",
  },
  { pathTitle: "Chat", path: "/chat/1" },
  { pathTitle: "Profile", path: "/profile" },
  { pathTitle: "Playground", path: "/playground" },
];

const AppBar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <MaterialUiAppBar className={classes.appBar} position="static">
      <Toolbar>
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={`${classes.link} ${route.path === location.pathname ? classes.activeLink : ""
              }`}
          >
            <Typography variant="h6">{route.pathTitle}</Typography>
          </Link>
        ))}
      </Toolbar>
    </MaterialUiAppBar>
  );
};

export default AppBar;
