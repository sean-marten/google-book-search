import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "lightblue",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  image: {
    width: 128,
    height: 128,
  },
}));

export default function ResultCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography>Title</Typography>
          <Typography variant="body2" gutterBottom>
            written by Author
          </Typography>
          <div className={classes.image}>
            <img alt="Title" />
          </div>
        </Grid>
        <Grid item sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                style={{ marginTop: "40px" }}
                variant="body2"
                color="textSecondary"
              >
                Description
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              <Button color="primary">View</Button>
              <Button color="primary">Save</Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
