require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
  })
  .catch((e) => console.log(e));

mongoose.set("debug", true);

const PORT = process.env.PORT || 3001;
const app = express();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get("*", function (_req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
