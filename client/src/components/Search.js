import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ResultPage from "./ResultPage";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import API from "../utils/api";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "royalblue",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: "center",
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
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.search(search, 10).then((res) => {
      setResults(res.data.items);
    });
  };

  return (
    <Container>
      <Container className={classes.root}>
        <Typography variant="h5" gutterBottom>
          Book Search
        </Typography>
        <br />
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Book"
            variant="outlined"
            className={classes.input}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Typography style={{ textAlign: "right" }}>
            <br />
            <Button type="submit" className={classes.button}>
              Search
            </Button>
          </Typography>
        </form>
      </Container>
      <ResultPage data={results} />
    </Container>
  );
}
