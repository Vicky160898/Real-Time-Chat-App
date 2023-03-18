require("dotenv").config();
const express = require("express");
const cors = require("cors");
const UserRouter = require("./routes/userRoutes");
const connect = require("./config/db");
const colors = require("colors");
const { notFound } = require("./middleware/errorMiddleware");
const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(express.json()); //to accept json  data
app.use("/api/user", UserRouter);
app.use(notFound);
connect();
app.listen(PORT, () => console.log("server started".yellow.bold));
