const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

// Use '/admin' as the base path for admin-related routes
app.use("/admin", adminRoutes);

// Use '/' as the base path for shop-related routes
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found :(</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
