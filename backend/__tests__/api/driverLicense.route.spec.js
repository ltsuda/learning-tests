const { test, expect } = require("@playwright/test")

test("should give Provisional license between 15 and 18 years old", async ({ request }) => {
    const response = await request.post("/driver/license", { params: { age: 16 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "Provisional license allowed",
    })
})

test("should give Unrestricted for older than 18 years old", async ({ request }) => {
    const response = await request.post("/driver/license", { params: { age: 18 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "Unrestricted license allowed",
    })
})

test("should not allow any license for age below 15", async ({ request }) => {
    const response = await request.post("/driver/license", { params: { age: 12 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "No license allowed for your age",
    })
})

test("should return error message if age is not a number", async ({ request }) => {
    const response = await request.post("/driver/license", { params: { age: "age" } })
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Age is not defined or are not a number",
    })
})

test("should return error message if age is undefined", async ({ request }) => {
    const response = await request.post("/driver/license")
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Age is not defined or are not a number",
    })
})
