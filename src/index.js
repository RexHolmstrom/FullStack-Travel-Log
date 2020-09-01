const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(morgan("common"));
// Adding helmet to hide what backend is being used.
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Hello there!",
  });
});

app.use((req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

//eslint disabled no-unused-vars
app.use((error, res, req, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "hi" : error.stack,
  });
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
