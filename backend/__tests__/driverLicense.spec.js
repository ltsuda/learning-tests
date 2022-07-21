const { validateAge } = require("../src/driverLicense/driverLicense.js")

describe("Driver's license tests", () => {
    test("should give Provisional license between 15 and 18 years old", () => {
        result = validateAge(15)
        expect(result).toEqual("Provisional license allowed")
    })
    test("should give Unrestricted for older than 18 years old", () => {
        result = validateAge(18)
        expect(result).toEqual("Unrestricted license allowed")
    })
    test("should not allow any license for age below 15", () => {
        result = validateAge(14)
        expect(result).toEqual("No license allowed for your age")
    })
    test("should return error message if age is not a number", () => {
        result = validateAge("abc")
        expect(result).toEqual("Age is not defined or are not a number")
    })
    test("should return error message if age is undefined", () => {
        result = validateAge()
        expect(result).toEqual("Age is not defined or are not a number")
    })
})
