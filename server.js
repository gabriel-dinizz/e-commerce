const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin"); // Import adminData (both routes and products)
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// Use '/admin' as the base path for admin-related routes
app.use("/admin", adminData.routes);

// Use '/' as the base path for shop-related routes
app.use(shopRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).render("page-not-found", { pageTitle: "Page Not Found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
