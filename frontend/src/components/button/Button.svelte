<div class="button-container" data-id="button-container">
    <button type="button" class="button-submit" data-id="button-submit">Submit</button>
</div>

<style>
    .button-container {
        margin: 0;
        max-width: 200px;
        min-width: 160px;
        width: 200px;
        flex: 20%;
    }
    button {
        width: 100%;
        height: 64px;
        background: #c9ada7;
        text-transform: uppercase;
        color: white;
        font-weight: bold;
        letter-spacing: 1px;
        border: none;
        font-size: 18px;
        /* font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; */
        cursor: pointer;
    }
    button:hover,
    button:focus {
        background-color: #4a4e69;
    }
    button:disabled {
        background-color: #9a8c98;
    }
</style>
