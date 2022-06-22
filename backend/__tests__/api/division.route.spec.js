const { test, expect } = require("@playwright/test")

test("128 / 2 should be 64", async ({ request }) => {
    const response = await request.post("/math/divide", { params: { operand1: 128, operand2: 2 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "OK",
        result: 64,
    })
})

test("-3 / 19 should be -0.158", async ({ request }) => {
    const response = await request.post("/math/divide", { params: { operand1: -3, operand2: 19 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "OK",
        result: -0.158,
    })
})

test("1 / 0 should result in zero division error", async ({ request }) => {
    const response = await request.post("/math/divide", { params: { operand1: 1, operand2: 0 } })
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Division by zero is not possible",
        operands: {
            operand1: 1,
            operand2: 0,
        },
    })
})

test("10 / 'jkl' should result in 400", async ({ request }) => {
    const response = await request.post("/math/divide", { params: { operand1: 10, operand2: "jkl" } })
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Operands are not defined or are not a number",
        operands: { operand1: "10", operand2: "jkl" },
    })
})

test("Missing input should result in 400", async ({ request }) => {
    const response = await request.post("/math/divide", { params: { operand2: 2 } })
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Operands are not defined or are not a number",
        operands: { operand1: null, operand2: "2" },
    })
})
