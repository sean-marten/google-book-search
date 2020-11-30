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

export default function ResultPage(props) {
  const classes = useStyles();

  console.log(props.data);

  return (
    <Container className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Results
      </Typography>
      {props.data.map((book) => (
        <ResultCard
          key={book.volumeInfo.title}
          author={book.volumeInfo.authors[0]}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks.smallThumbnail}
          link={book.volumeInfo.infoLink}
        />
      ))}
    </Container>
  );
}
