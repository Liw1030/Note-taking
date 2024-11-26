import { writable } from 'svelte/store';
export const showForm = writable(false);
export const selectedNote = writable({
    title: "",
    description: "",
});

export const selectedNoteIdForDelete = writable(null);
export const searchQuery = writable("");
export const archiveStatus = writable(false);