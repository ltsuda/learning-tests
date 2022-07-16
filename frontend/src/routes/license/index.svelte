<script>
    import "./license.css"
    import { activeNavItem } from "../../components/stores"
    activeNavItem.set("license")
    import Button from "../../components/button/Button.svelte"
</script>

<div class="svelte-content" data-id="svelte-content">
    <div class="question-container" data-id="question-container">
        <p>What is your age?</p>
    </div>
    <div class="input-age-container" data-id="input-age-container">
        <input
            type="text"
            placeholder="Age"
            class="input-age"
            data-id="input-age"
            maxlength="3"
            min="1"
            max="150"
            required
        />
    </div>
    <Button />

    <div class="answer-container" data-id="answer-container">
        <p>Here is the response</p>
    </div>
</div>
