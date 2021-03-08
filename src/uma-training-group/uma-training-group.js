import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import umaList from "../assets/umalist.json";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: "0em",
    padding: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  uma1container: {
    backgroundColor: "#FFF3F3"
  },
  uma2container: {
    backgroundColor: "#EFF8FF"
  },
  uma3container: {
    backgroundColor: "#F4FFF9"
  },
  grid: {
    marginBottom: "0.5em"
  },
  label: {
    magring: "0 0 0.5em"
  },
  parentLabel: {
    padding: 0,
    margin: 0,
    fontSize: "0.7em"
  }
}));

export default function UmaTrainingGroup({
  label,
  trainingUmaId1,
  trainingUmaId2,
  trainingUmaId3
}) {
  const classes = useStyles();
  const list = umaList.umamusume;

  function getUmaNameById(umaId) {
    console.info("select " + umaId);
    if (umaId == -1) return "none";
    const found = list.find(element => element.id == umaId);
    return found ? found.name : "none";
  }

  return (
    <div className={classes.root}>
      <p className={classes.label}>{label}</p>
      <Grid className={classes.grid} container spacing={1}>
        <Grid item xs>
          <Paper className={[classes.paper, classes.uma1container]}>
            <p className={classes.parentLabel}>継承元1</p>
            {getUmaNameById(trainingUmaId1)}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={[classes.paper, classes.uma2container]}>
            <p className={classes.parentLabel}>継承元2</p>
            {getUmaNameById(trainingUmaId2)}
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={[classes.paper, classes.uma3container]}>
            <p className={classes.parentLabel}>育成</p>
            {getUmaNameById(trainingUmaId3)}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
