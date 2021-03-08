import React from "react";
import UmaSelectorGroup from "./uma-selector-group/uma-selector-group.js";
import "./style.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ウマ娘4ループのやつ
          </Typography>
        </Toolbar>
      </AppBar>
      <div class="umaLoopContainer">
        <UmaSelectorGroup />
      </div>
    </div>
  );
}
