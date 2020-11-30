import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "royalblue",
    marginTop: theme.spacing(5),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1 style={{ fontSize: "50px" }}>Google Books Search</h1>
      <h3 style={{ fontSize: "25px" }}>
        Search for and Save Books of Interest!
      </h3>
    </Container>
  );
}
