require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Peeked API listening on port ${PORT}.`);
});

process.on("unhandledRejection", (err) => {
  console.log("Error", err);
  server.close(() => process.exit(1));
});
