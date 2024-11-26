<script>
    import { searchQuery } from './store.js';

    const handleSearch = (event) => {
        searchQuery.set(event.target.value);
    };
</script>

<div class="header">
    <h1>Todas las notas</h1>
    <div class="content2">
        <input
            class="search"
            type="text"
            placeholder="Buscar por titulo, contenido o tags.."
            on:input={handleSearch}
        />
        <img src="/icon-settings.svg" alt="" />
    </div>
</div>

<style>
    .header {
        background-color: #fff;
        color: black;
        padding: 10px;
        display: flex;
        align-items: center;
        border-left: 1px solid rgb(167, 167, 167);
    }
    h1 {
        font-size: 24px;
        margin: 0;
        display: inline-block;
    }
    .content2 {
        display: flex;
        align-items: center;
        margin-left: auto;
    }
    .search {
        background-color: transparent;
        border: 1px solid rgb(167, 167, 167);
        border-radius: 5px;
        height: 25px;
        padding-left: 30px;
        background: url("/icon-search.svg") no-repeat 4px center;
        background-size: 20px;
    }
    img{
        margin: 0px 15px;
    }
</style>
