<script>
    import { searchQuery } from './store.js';

    const handleSearch = (event) => {
        searchQuery.set(event.target.value);
    };
</script>

<div class="search-container">
    <input type="text" placeholder="Buscar nota..." on:input={handleSearch} />
    <button>Buscar</button>
</div>

<style>
    .search-container {
        display: flex;
        margin: 10px 0;
    }

    input[type="text"] {
        flex: 1;
        padding: 10px;
        border: 1px solid rgb(167, 167, 167);
        border-radius: 5px;
        margin-right: 10px;
    }

    button {
        padding: 10px;
        background-color: #1875f0;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
