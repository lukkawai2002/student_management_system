import { useState } from "react";
import "./NoteTaking.css";

function NoteTaking() {

    const [notes, setNotes] = useState(['Finish Subject Registration', 'Check the Timetable']);
    const [newNote, setNewNote] = useState();

    const handleNewNote = (event) => {
        setNewNote(event.target.value);
    }

    const addNote = () => {
        if (newNote.trim().length !== 0) {
            setNotes(n => [...n, newNote]);
        }
        setNewNote('');
    }

    const deleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    }

    const moveUp = (index) => {
        if(index > 0) {
            const newNoteMoveUp = [...notes];
            [newNoteMoveUp[index], newNoteMoveUp[index - 1]] = [newNoteMoveUp[index - 1], newNoteMoveUp[index]];
            setNotes(newNoteMoveUp);
        }
    }

    const moveDown = (index) => {
        if(index < notes.length - 1) {
            const newNoteMoveDown = [...notes];
            [newNoteMoveDown[index], newNoteMoveDown[index + 1]] = [newNoteMoveDown[index + 1], newNoteMoveDown[index]];
            setNotes(newNoteMoveDown);
        }
    }

    return (
        <div className="NoteTaking">
            <div className="NoteInput">
                <input type="text" className="form-control" value={newNote} onChange={handleNewNote} placeholder="Take a Note"></input>
            </div>
            <button type="button" className="Add btn btn-success" onClick={addNote}>Add</button>
            <ul>
                {notes.map((note, index) => (<li key={index}>{note} <div className="button-group"><button type="button" className="btn btn-warning" onClick={() => moveUp(index)}>Up</button> <button type="button" className="btn btn-info" onClick={() => moveDown(index)}>Down</button> <button type="button" className="btn btn-danger" onClick={() => deleteNote(index)}>Delete</button></div></li>))}
            </ul>
        </div>
    );
}

export default NoteTaking