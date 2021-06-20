import mongose, { ConnectionOptions } from "mongoose";

import config from "./config";

const dbOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongose.connect(config.DB.URI, dbOptions);

const connection = mongose.connection;

connection.once("open", () => {
  console.log("🌳 - MongoDB connected");
});

connection.on("error", (err) => {
  console.log(err);
  process.exit(0);
});
