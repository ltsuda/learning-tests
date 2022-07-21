<script>
    import "./license.css"
    import { activeNavItem } from "../../components/stores"
    activeNavItem.set("license")
    import Input from "../../components/input/input.svelte"
    import Button from "../../components/button/Button.svelte"
</script>

<div class="svelte-content" data-id="svelte-content">
    <div class="question-container" data-id="question-container">
        <p>What is your age?</p>
    </div>
    <div class="input-age-container" data-id="input-age-container">
        <Input class_name="input-age" data_id="input-age" min="1" max="150" placeholder="Age" maxlength="3" />
    </div>
    <div class="button-container" data-id="button-container">
        <Button />
    </div>

    <div class="answer-container" data-id="answer-container">
        <p />
    </div>
</div>
