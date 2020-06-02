//======================================================
// Dependencies
//======================================================

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/routes.js");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

//=====================================================
// Routes
//=====================================================

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use("/api", routes);

app.use((req, res, next) => {
    res.send("Welcome to Express, Backend server is up and running!");
});

//=====================================================
// Connect to the Mongo DB
//=====================================================

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/BottomsUpDB", { useNewUrlParser: true, useUnifiedTopology: true });

// DEV:
mongoose.connect( "mongodb://localhost/BottomsUpDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//=====================================================
// Start the server
//=====================================================

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
