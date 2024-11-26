<script>
    import { deleteDoc, doc } from "firebase/firestore";
    import { db } from "../lib/firebase";
    import { onMount } from 'svelte';
    import { selectedNoteIdForDelete } from './store.js';

    export let noteId;

    const deleteTask = async (id) => {
        if (id) {
            await deleteDoc(doc(db, "notes", id));
            console.log("Nota eliminada");
            selectedNoteIdForDelete.set(null);
        }
    };

    $: if (noteId) {
        deleteTask(noteId);
    }
</script>

