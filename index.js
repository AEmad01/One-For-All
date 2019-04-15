const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const path = require('path')

const tasks = require("./routes/api/task");
const admins = require("./routes/api/admin");
const schedules = require("./routes/api/schedules");
const partners = require("./routes/api/partners");
const members = require("./routes/api/members");
const appointments = require("./routes/api/appointments");
const location = require("./routes/api/locations");
const lifecoach = require("./routes/api/lifecoach")
const slot = require("./routes/api/slots")
const user = require('./routes/api/user')


const app = express();

app.use(cors())
app.use(express.json());


const db = process.env.MONGO_URI || 'mongodb+srv://hazem9999:gemseldeen@one-for-all-eoozu.mongodb.net/test?';

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

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  });
}

// Handling 404
app.use((req, res) => {
  res.status(404).send({ err: "We can not find what you are looking for" });
});


const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server up and running on port ${port}`));