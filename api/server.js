const express = require("express");

const server = express();
const router = require("./users/users-router");

server.use(express.json());

server.use("/api", router);

server.get("/", (req, res) => {
  res.json({ message: "express çalışıyor" });
});

module.exports = server;
