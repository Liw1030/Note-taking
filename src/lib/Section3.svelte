<script>
    import { selectedNote, selectedNoteIdForDelete } from './store.js';
    import { onMount } from 'svelte';
    import { deleteDoc, doc, updateDoc } from "firebase/firestore";
    import { db } from "../lib/firebase";

    let noteId;
    let note;

    selectedNote.subscribe(value => {
        note = value;
        noteId = value ? value.id : null;
    });

    const handleDeleteClick = async () => {
        if (noteId) {
            await deleteDoc(doc(db, "notes", noteId));
            console.log("Nota eliminada");
            selectedNoteIdForDelete.set(null);
            selectedNote.set(null);
        }
    };

    const handleArchiveClick = async () => {
        if (noteId) {
            const noteRef = doc(db, "notes", noteId);
            await updateDoc(noteRef, { archived: true });
            console.log("Nota archivada");
            selectedNote.set(null);
        }
    };

    const handleUnarchiveClick = async () => {
        if (noteId) {
            const noteRef = doc(db, "notes", noteId);
            await updateDoc(noteRef, { archived: false });
            console.log("Nota desarchivada");
            selectedNote.set(null);
        }
    };
</script>

<div class="section">
    <div class="options">
        <button class="archive" on:click={handleArchiveClick}>Archivar Nota</button>
        <button class="unarchive" on:click={handleUnarchiveClick}>Desarchivar Nota</button>
        <button class="delete" on:click={handleDeleteClick}>Eliminar Nota</button>
    </div>
</div>


<style>
    .section {
        flex: 1;
        padding: 10px;
        background-color: #ffffff;
        height: 100%;
        border-top: 1px solid rgb(167, 167, 167);
    }

    .options {
        display: flex;
        flex-direction: column;
    }

    .archive {
        background-color: transparent;
        border: 1px solid rgb(167, 167, 167);
        border-radius: 5px;
        width: 200px;
        height: 40px;
        padding-left: 30px;
        background: url("/icon-archive.svg") no-repeat 4px center;
        background-size: 20px;
        cursor: pointer;
        margin: 10px 20px;
    }

    .archive:hover{
        background-color: rgba(134, 134, 134, 0.26);
    }

    .delete {
        background-color: transparent;
        border: 1px solid rgb(167, 167, 167);
        border-radius: 5px;
        width: 200px;
        height: 40px;
        padding-left: 30px;
        background: url("/icon-delete.svg") no-repeat 4px center;
        background-size: 20px;
        cursor: pointer;
        margin: 10px 20px;
    }

    .delete:hover{
        background-color: rgba(134, 134, 134, 0.26);
    }

    .unarchive{
        background-color: transparent;
        border: 1px solid rgb(167, 167, 167);
        border-radius: 5px;
        width: 200px;
        height: 40px;
        padding-left: 30px;
        background: url("/icon-delete.svg") no-repeat 4px center;
        background-size: 20px;
        cursor: pointer;
        margin: 10px 20px;
    }
    .unarchive:hover{
        background-color: rgba(134, 134, 134, 0.26);
    }
</style>
