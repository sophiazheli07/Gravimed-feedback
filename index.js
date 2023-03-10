const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Feedback } = require("./models/feedback");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/feedbacks", async (req, res) => {
  const { body } = req;
  const feedback = new Feedback({ rate: body.score });
  await feedback.save();
  res.send(feedback);
});

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://Spheivrk:Sophia.zheli07@spheivrk.zqizmlq.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("database.connected");
    })
    .catch((e) => {
      console.log("error", e);
    });
  console.log(`Example app listening on port ${port}`);
});
