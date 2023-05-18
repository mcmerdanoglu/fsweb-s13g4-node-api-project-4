require("dotenv").config();
//eslint-disable-next-line no-undef

const server = require("./api/server");

//console.log(process.env) // remove this after you've confirmed it is working

const port = process.env.PORT || "9001";

server.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor.`);
});
