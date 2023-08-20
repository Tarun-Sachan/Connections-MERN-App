require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const express = require("express");
const app = express();
//connect db
const connectDB = require("./db/connect");
const authenticatedUser = require("./middleware/authentication");
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
//"https://connections-mern-app.onrender.com",   cors url
app.use(express.json());
app.use(cors());
// extra packages
app.use(cors(), function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://connections-mern-app.onrender.com"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//routers
const authRouter = require("./routes/auth");
const connectionRouter = require("./routes/connections");
// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/connections", authenticatedUser, connectionRouter);
//errror handlers
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DB connected...");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
