<script>
    import "./math.css"
    import { activeNavItem } from "../../components/stores"
    activeNavItem.set("math")
    import Select from "../../components/select-operation/select.svelte"
    import Button from "../../components/button/Button.svelte"
    import Input from "../../components/input/input.svelte"
    let inputPattern = "-?[0-9]{1,4}"
</script>

<div class="svelte-content" data-id="svelte-content">
    <div class="instruction-container" data-id="instruction-container">
        <p class="instruction-title">Calculator</p>
        <p class="instruction-description">(only four digits operands)</p>
    </div>
    <div class="select-operation-container">
        <Input class_name="first-operand" data_id="first-operand" placeholder="Operand 1" pattern={inputPattern} />
        <Select class_name="select-operation" data_id="select-operation" />
        <Input class_name="second-operand" data_id="second-operand" placeholder="Operand 2" maxlength="255" />
    </div>
    <div class="button-container" data-id="button-container">
        <Button />
    </div>
    <div class="answer-container" data-id="answer-container">
        <p />
    </div>
</div>
