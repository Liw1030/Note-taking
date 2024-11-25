<script>
    // Ejemplo de datos para las etiquetas (tags)
    const tags = [
        { name: 'Cooking' },
        { name: 'Dev' },
        { name: 'Fitness' },
        { name: 'Health' },
        { name: 'Personal' },
        { name: 'React' },
        { name: 'Recipes' },
        { name: 'Shopping' },
        { name: 'Travel' },
        { name: 'TypeScript' }
    ];
</script>

<div class="sidebar">
    <div class="logo">
        <img src="/logo.svg" alt="Logo">
    </div>
    <div class="section">
        <h2>All Notes</h2>
        <ul>
            <li><img src="/icon-home.svg" alt="All Notes Icon">Todas las notas</li>
            <li><img src="/icon-archive.svg" alt="Archived Notes Icon">Notas archivadas</li>
        </ul>
    </div>
    <div class="section">
        <h2>Tags</h2>
        <ul>
            {#each tags as tag}
                <li><img src="/icon-tag.svg" alt="Tag Icon">{tag.name}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .sidebar {
        width: 200px;
        background-color: #fff;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    .logo {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 20px;
    }

    .section {
        margin-bottom: 20px;
    }
    .section h2 {
        margin: 0;
        font-size: 14px;
        margin-bottom: 10px;
    }
    .section ul {
        list-style: none;
        padding: 0;
    }
    .section li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .section li img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
</style>


