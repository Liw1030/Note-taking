<script>
    import {
        addDoc,
        doc,
        collection,  // Asegúrate de importar collection
        updateDoc,
    } from "firebase/firestore";
    import { db } from "../lib/firebase";
    import { showForm } from "./store";

    export let note = {
        title: "",
        description: "",
    };

    const resetNote = () => {
        note = {
            title: "",
            description: "",
        };
    };

    const addOrUpdateNote = async () => {
        if (note.id) {
            const noteRef = doc(db, "notes", note.id);
            await updateDoc(noteRef, {
                title: note.title,
                description: note.description,
            });
            console.log("Nota actualizada");
        } else {
            await addDoc(collection(db, "notes"), note);
            console.log("Nota agregada");
        }
    };

    const handleSubmit = async () => {
        await addOrUpdateNote();

        resetNote();
        showForm.set(false);
    };
</script>

<h2>{note.id ? "Edita tu nota" : "Crea tu nueva nota"}</h2>
<form on:submit|preventDefault={handleSubmit}>
    <label for="title">Titulo</label>
    <input
        type="text"
        name="title"
        placeholder="Titulo de la nota"
        bind:value={note.title}
    />
    <label for="description">Descripción</label>
    <textarea
        name="description"
        rows="5"
        placeholder="Descripción de la nota"
        bind:value={note.description}
    ></textarea>
    <button class="add_button">Guardar</button>
</form>

<style>
    h2 {
        margin: 15px 15px 0px 15px;
        justify-content: center;
        display: flex;
        color: #000000a2;
    }
    form {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        padding: 15px;
    }
    label {
        margin-bottom: 5px;
    }
    input {
        margin: 10px 0px;
        border: 1px solid rgb(167, 167, 167);
        border-radius: 5px;
        height: 30px;
    }
    textarea {
        margin: 10px 0px;
        height: 359px;
        width: 500px;
        border: 1px solid rgb(167, 167, 167);
        border-radius: 5px;
        font-family: Arial, Helvetica, sans-serif;
    }
    button {
        background-color: #1875f0;
        color: #fff;
        border-radius: 4px;
        border: none;
        height: 30px;
        margin-top: 15px;
        cursor: pointer;
    }
</style>
