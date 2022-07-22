<script>
    import "./license.css"
    import { activeNavItem } from "../../components/stores"
    activeNavItem.set("license")
    import Input from "../../components/input/input.svelte"
    import Button from "../../components/button/Button.svelte"
    import { driver } from "../../utils/api"

    let pattern = "^([1-9][0-9]??|100)$"
    let age = ""
    let answer = ""
    let disabled = true

    function handleInput() {
        const reg = new RegExp(pattern)
        if (age !== "") {
            if (!reg.test(age)) {
                answer = "Error: Age must be a number between 1 to 100"
                disabled = true
            } else {
                answer = ""
                disabled = false
            }
        } else {
            answer = ""
            disabled = true
        }
    }
    async function handleClick() {
        const response = await driver("license", { age: age })
        answer = response.message
    }
</script>

<div class="svelte-content" data-id="svelte-content">
    <div class="question-container" data-id="question-container">
        <p>What is your age?</p>
    </div>
    <div class="input-age-container" data-id="input-age-container">
        <Input
            class_name="input-age"
            data_id="input-age"
            placeholder="Age"
            maxlength="3"
            {pattern}
            bind:value={age}
            on:input={handleInput}
        />
    </div>
    <div class="button-container" data-id="button-container">
        <Button bind:isDisabled={disabled} on:click={handleClick} />
    </div>

    <div class="answer-container" data-id="answer-container">
        <p>{answer}</p>
    </div>
</div>
