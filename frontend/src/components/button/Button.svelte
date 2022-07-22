<script>
    export let isDisabled
</script>

<button type="button" class="button-submit" data-id="button-submit" disabled={isDisabled} on:click>Submit</button>

<style>
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
