<script>
    export let class_name
    export let data_id
    export let type = "text"
    export let placeholder = "Age"
    export let maxlength = "3"
    export let min = "1"
    export let max = "150"
    export let pattern = "[0-9]{1,3}"
</script>

<input class={class_name} data-id={data_id} {type} {placeholder} {maxlength} {min} {max} {pattern} required />

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
    }
</style>
