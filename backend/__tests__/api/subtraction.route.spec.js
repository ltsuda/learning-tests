const { test, expect } = require("@playwright/test")

test("512 - 256 should be 256", async ({ request }) => {
    const response = await request.post("/math/subtraction", { params: { operand1: 512, operand2: 256 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "OK",
        result: 256,
    })
})

test("-128.2567 - -128.257 should be 0", async ({ request }) => {
    const response = await request.post("/math/subtraction", { params: { operand1: -128.2567, operand2: -128.257 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "OK",
        result: 0,
    })
})
test("5 + 'def' should result in 400", async ({ request }) => {
    const response = await request.post("/math/subtraction", { params: { operand1: 5, operand2: "def" } })
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Operands are not defined or are not a number",
        operands: { operand1: "5", operand2: "def" },
    })
})

test("Missing input should result in 400", async ({ request }) => {
    const response = await request.post("/math/subtraction", { params: { operand1: 100 } })
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Operands are not defined or are not a number",
        operands: { operand1: "100", operand2: null },
    })
})
