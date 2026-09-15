async function loadNotes() {
  const response = await fetch("/notes");
  const notes = await response.json();

  const notesContainer = document.getElementById("notesContainer");
  notesContainer.innerHTML = "";

  notes.forEach(note => {
    const noteElement = document.createElement("div");
    noteElement.className = "note-card";

    noteElement.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>

      <button class="delete-btn" onclick="deleteNote(${note.id})">
        🗑 Delete
      </button>
    `;

    notesContainer.appendChild(noteElement);
  });
}


async function addNote() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !content) {
    alert("Please enter title and content");
    return;
  }

  await fetch("/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      content
    })
  });

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  loadNotes();
}


async function deleteNote(id) {
  await fetch(`/notes/${id}`, {
    method: "DELETE"
  });

  loadNotes();
}


loadNotes();