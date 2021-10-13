const express = require("express");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  console.log("user connected on Socket.io server");
  console.log(socket.id);
});

server.listen(PORT, () => {
  console.log(`Server started at port no: ${PORT}`);
});
