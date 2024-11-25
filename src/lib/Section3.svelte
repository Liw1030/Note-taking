<div class="section">
    <div class="options">
        <button class="archive">Archivar Nota</button>
        <button class="delete">Eliminar Nota</button>
    </div>
</div>

<style>
    .section {
        flex: 1;
        padding: 10px;
        background-color: #ffffff;
        height: 100%;
        border: 1px solid rgb(167, 167, 167);
    }

    .options {
        display: flex;
        flex-direction: column;
        .archive {
            background-color: transparent;
            border: 1px solid rgb(167, 167, 167);
            border-radius: 5px;
            width: 200px;
            height: 40px;
            padding-left: 30px;
            background: url("/icon-archive.svg") no-repeat 4px center;
            background-size: 20px;
            margin: 20px;
        }
        .delete{
            background-color: transparent;
            border: 1px solid rgb(167, 167, 167);
            border-radius: 5px;
            width: 200px;
            height: 40px;
            padding-left: 30px;
            background: url("/icon-delete.svg") no-repeat 4px center;
            background-size: 20px;
            margin: 0px 20px;
        }
    }
</style>
