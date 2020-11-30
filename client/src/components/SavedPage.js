import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SavedCard from "./SavedCard";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "royalblue",
    padding: theme.spacing(2),
  },
  top: {
    marginTop: theme.spacing(2),
  },
}));

export default function SearchPage() {
  const classes = useStyles();

  return (
    <Container className={classes.top}>
      <Container className={classes.root}>
        <Typography variant="h5" gutterBottom>
          Saved Books
        </Typography>
        <SavedCard />
      </Container>
    </Container>
  );
}
