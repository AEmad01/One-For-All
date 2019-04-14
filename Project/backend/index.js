const express = require("express");
const tasks = require("./routes/api/task");
const admins = require("./routes/api/admin");
const schedules = require("./routes/api/schedules");
const partners = require("./routes/api/partners");
const members = require("./routes/api/members");
const appointments = require("./routes/api/appointments");
const location = require("./routes/api/locations");
const mongoose = require("mongoose");
const lifecoach = require("./routes/api/lifecoach")
const slot = require("./routes/api/slots")
const user = require('./routes/api/user')
const cors = require('cors')

const db = require('./config/keys').mongoURI;

const app = express();
app.use(express.json());
app.use(cors())


app.use(express.json());
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Litren Hub</h1>
    <a href="/api/partners">Partners</a>
    <a href="/api/appointments">Appointments</a>
    <a href="/api/members">Members</a>
    <a href="/api/schedules">schedules</a>
    <a href="/api/locations">locations</a>           
    <a href="/api/admin">Admins</a>
    <a href="/api/task">tasks</a>
    <a href="/api/lifecoach">lifecoach</a>
    <a href="/api/slots//getslots">slots</a>

    `);
});

mongoose
  .connect(db)
  .then(() => console.log("connected to MongoDB"))
  .catch(err => console.log(err));
// Direct routes to appropriate files

app.use("/api/admin", admins);
app.use("/api/task", tasks);
app.use("/api/partners", partners);
app.use("/api/members", members);
app.use("/api/appointments", appointments);
app.use("/api/schedules", schedules); 
app.use("/api/locations", location);
app.use("/api/lifecoach", lifecoach);
app.use("/api/slots", slot);
app.use("/api/user", user)

// Handling 404
app.use((req, res) => {
  res.status(404).send({ err: "We can not find what you are looking for" });
});

const port = 3001;
app.listen(port, () => console.log(`Server up and running on port ${port}`));