const mongoose = require("mongoose");

const URI = process.env.DB_URI;

module.exports = () => {
  console.log("\x1b[33m%s", "Connecting to MongoDB...", ` ${URI}`);
  const connect = () => {
    mongoose.connect(
      URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
        autoIndex: true
      },
      (e) => {
        if (e)
          console.log(
            "\x1b[31m%s\x1b[0m",
            `Error connecting to Database: ${e}`
          );
        else console.log("\x1b[32m%s\x1b[0m", `Connection successful`);
      }
    );
  };

  connect()
};
