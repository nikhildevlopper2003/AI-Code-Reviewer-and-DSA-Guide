const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(
    cors({
      origin: "https://aicodereviewerwithdsaguide.netlify.app",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );
  


app.use(express.json())

app.use("/ai", aiRoutes);

// ✅ Test if backend is running
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;