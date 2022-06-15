function validateAge(age) {
    if (age >= 18) {
        return "Unrestricted license allowed"
    } else if (age >= 15) {
        return "Provisional license allowed"
    } else {
        return "No license allowed for your age"
    }
}

module.exports = { validateAge }
