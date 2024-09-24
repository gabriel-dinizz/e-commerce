const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set the view engine to Pug
app.set("view engine", "ejs");
app.set("views", views);

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Set the basedir option for Pug to allow using absolute paths
app.locals.basedir = path.join(__dirname, "public");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Import adminData (both routes and products)
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

// Use '/admin' as the base path for admin-related routes
app.use("/admin", adminData.routes);

// Use '/' as the base path for shop-related routes
app.use(shopRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).render("page-not-found", { pageTitle: "Page Not Found" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
