<script>
    export let class_name
    export let data_id
    let selected = "addition"
    export let title = "operations"
    let operations = [
        { data_id: "addition", value: "addition", text: "\u002b" },
        { data_id: "subtraction", value: "subtraction", text: "\u2212" },
        { data_id: "multiplication", value: "multiplication", text: "\u00d7" },
        { data_id: "division", value: "division", text: "\u00f7" },
    ]
</script>

<select class={class_name} data-id={data_id} {title} bind:value={selected} required>
    {#each operations as operation}
        <option value={operation.value} data-id={operation.data_id}>
            {operation.text}
        </option>
    {/each}
</select>

<style>
    select {
        cursor: pointer;
        -webkit-appearance: none;
    }
</style>
