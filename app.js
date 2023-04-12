// Get the form inputs and button
const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const addNoteBtn = document.querySelector('#add-note-btn');

// Get the notes list element
const notesList = document.querySelector('#notes');

// Add event listener to the "Add Note" button
addNoteBtn.addEventListener('click', e => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Create a new note object
    const note = {
        title: noteTitle.value,
        body: noteBody.value
    };

    // Add the note to the list
    addNoteToList(note);

    // Clear the form inputs
    noteTitle.value = '';
    noteBody.value = '';

});

// Add a note to the notes list
function addNoteToList(note) {
    // Create a new list item element
    const li = document.createElement('li');
    li.classList.add('note');

    // Create the note title element
    const title = document.createElement('h3');
    title.textContent = note.title;

    // Create the note body element
    const body = document.createElement('p');
    body.textContent = note.body;

    // Create the delete button element
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Append the title, body and delete button elements to the list item
    li.appendChild(title);
    li.appendChild(body);
    li.appendChild(deleteBtn);

    // Append the list item to the notes list
    notesList.appendChild(li);
}
