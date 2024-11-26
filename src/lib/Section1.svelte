<script>
    import { showForm, selectedNote } from './store.js';
    import ListNote from './ListNote.svelte';

    const handleClick = () => {
        selectedNote.set({
            title: "",
            description: "",
        });
        showForm.set(true);
    };
</script>

<div class="section-1">
    <button class="create" on:click={handleClick}>+Crear Nueva Nota</button>
    <ListNote/>
</div>

<style>
    .section-1 {
        flex: 1;
        padding: 10px;
        background-color: #fff;
        height: 100%;
        border-top: 1px solid rgb(167, 167, 167);
        border-left: 1px solid rgb(167, 167, 167);
        display: flex;
        flex-direction: column;
    }

    .create {
        background-color: #1875f0;
        color: #fff;
        border-radius: 4px;
        border: none;
        height: 30px;
    }
</style>
