const app = require('./app');

const server = require("http").Server(app)

app.use("/api", require("./requestRoute"))

const PORT = process.env.LISTENING_PORT || 80;
server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


// module.exports = server;

