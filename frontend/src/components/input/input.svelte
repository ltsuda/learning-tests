<script>
    export let class_name
    export let data_id
    export let maxlength
    export let placeholder
    export let pattern
    export let value
</script>

<input
    class={class_name}
    data-id={data_id}
    {placeholder}
    {maxlength}
    {pattern}
    type="text"
    bind:value
    on:input
    required
/>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
    }
</style>
