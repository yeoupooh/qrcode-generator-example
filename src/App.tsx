import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";
import "./QRCodeGenerator";
import QRCodeGenerator from "./QRCodeGenerator";
import useStyles from "./styles";
import "./styles.css";

export default function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <QRCodeGenerator />
      </main>
    </>
  );
}
