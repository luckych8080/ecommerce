const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const router = require("./routes/product");
const app = express();
const PORT = 8080;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(router);

const URI = "mongodb://127.0.0.1:27017/ecommerce";

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    throw error;
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
