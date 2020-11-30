import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ResultPage from "./ResultPage";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "royalblue",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  input: {
    backgroundColor: theme.palette.common.white,
  },
  button: {
    backgroundColor: theme.palette.common.white,
  },
}));

export default function SearchPage() {
  const classes = useStyles();

  return (
    <Container>
      <Container className={classes.root}>
        <Typography variant="h5" gutterBottom>
          Book Search
        </Typography>
        <br />
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Book"
            variant="outlined"
            className={classes.input}
          />
        </form>
        <br />
        <Typography>
          <Button className={classes.button}>Search</Button>
        </Typography>
      </Container>

      <ResultPage />
    </Container>
  );
}
