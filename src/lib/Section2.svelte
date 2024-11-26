<script>
    import { showForm, selectedNote } from './store.js';
    import CreateNote from './CreateNote.svelte';

    let isVisible;
    let note;

    $: showForm.subscribe(value => {
        isVisible = value;
    });

    $: selectedNote.subscribe(value => {
        note = value;
    });
</script>

<div class="section">
    {#if isVisible}
        <CreateNote {note}/>
    {:else}
        <h5>Hola!!</h5>
        <p>Crea una nueva nota o edita una creada...</p>
    {/if}
</div>

<style>
    .section {
        flex: 1;
        padding: 10px;
        background-color: #ffffff;
        height: 100%;
        border: 1px solid rgb(167, 167, 167);
    }

    h5{
        margin: 20px;
        color: rgba(0, 0, 0, 0.74);
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
    }
    p{
        margin: 20px;
        color: rgba(0, 0, 0, 0.74);
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
