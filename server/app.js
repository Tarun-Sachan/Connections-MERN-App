require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
//connect db
const connectDB = require("./db/connect");
const authenticatedUser = require("./middleware/authentication");
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

// extra packages

//routers
const authRouter = require("./routes/auth");
const connectionRouter = require("./routes/connections");
// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/connections", authenticatedUser, connectionRouter);
//errror handlers
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

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
