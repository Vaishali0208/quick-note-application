const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let notes = [];

// Get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Add a note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  const newNote = {
    id: Date.now(),
    title,
    content
  };

  notes.push(newNote);
  res.status(201).json(newNote);
});

// Delete a note
app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  notes = notes.filter(note => note.id !== id);

  res.json({ message: "Note deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});