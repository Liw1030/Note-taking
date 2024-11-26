<script>
    import {
        collection,
        onSnapshot,
    } from "firebase/firestore";
    import { db } from "../lib/firebase";
    import { showForm, selectedNote, searchQuery } from './store.js';

    let notes = [];
    let filteredNotes = [];

    const unsub = onSnapshot(
        collection(db, "notes"),
        (querySnapshot) => {
            notes = querySnapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });

            filterNotes();
            console.log(filteredNotes);
        },
        (err) => {
            console.log(err);
        },
    );

    const filterNotes = () => {
        filteredNotes = notes.filter(note => 
            note.title.toLowerCase().includes($searchQuery.toLowerCase()) ||
            note.description.toLowerCase().includes($searchQuery.toLowerCase())
        );
    };

    $: searchQuery.subscribe(value => {
        filterNotes();
    });

    const handleNoteClick = (note) => {
        selectedNote.set(note);
        showForm.set(true);
    };
</script>

{#each filteredNotes as note (note.id)}
    <button on:click={() => handleNoteClick(note)}>{note.title}</button>
{/each}

<style>
    button {
        height: 30px;
        border: 1px solid rgb(167, 167, 167);
        border-radius: 5px;
        margin-top: 20px;
        cursor: pointer;
    }

    button:hover{
        background-color: rgba(134, 134, 134, 0.26);
    }
</style>
