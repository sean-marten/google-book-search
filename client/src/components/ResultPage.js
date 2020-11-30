import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ResultCard from "./ResultCard";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "royalblue",
    padding: theme.spacing(2),
  },
}));

export default function ResultPage() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Results
      </Typography>
      <ResultCard />
    </Container>
  );
}
