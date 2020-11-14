const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
const Books = require("./models/books")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google_books", { useNewUrlParser: true });
// Define API routes here
app.get("/api/books", (req, res) => {
  res.send("cool")

})
app.delete("/api/books/:id", async (req, res) => {
  try {
    const deletedBook = await Books.deleteOne({_id: mongoose.Types.ObjectId(req.params.id)});
    res.status(200).json(deletedBook);
  } catch(error) {
    console.log(error)
    res.status(500).end();
  }


})
app.post("/api/books", async (req, res) => {
  try {
    const dbUser = await Books.create(req.body);
    console.log(dbUser);
    res.status(200).send(dbUser);
  } catch (error) {
    console.log(error)
    res.status(500).end();
  }

})
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
