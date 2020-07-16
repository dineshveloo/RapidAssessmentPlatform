require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');
const users = require("./routes/api/users");
const { PORT, CLIENT_ORIGIN, CLIENT_ORIGIN_NODE } = require('./config/info')

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN,PORT,CLIENT_ORIGIN_NODE
}))

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true },()=>{
      app.listen(PORT, () => console.log('conneted'))
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

app.get('/wake-up', (req, res) => res.json('wakeup'));

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' });
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

