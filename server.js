const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://bahodir08:bahodir0804@cluster0.zh1in.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("ERROR on connection to MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = process.env.PORT || 3000;
      server.listen(PORT, function () {
        console.log(
          `This server is running succesfully on port: ${PORT}, http://localhost:${PORT}.`
        );
      });
    }
  }
);
