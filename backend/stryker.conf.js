// @ts-check
/**
 * @type {import('@stryker-mutator/api/core').PartialStrykerOptions}
 */
module.exports = {
    _comment:
        "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information",
    packageManager: "npm",
    reporters: ["clear-text"],
    testRunner: "jest",
    jest: {
        projectType: "custom",
        configFile: "jest.config.js",
        enableFindRelatedTests: false,
    },
    commandRunner: { command: "npm run test:unit" },
    mutate: [
        "{src,lib}/**/*.js?(x)",
        "!{src,lib}/**/__tests__/**/*.js?(x)",
        "!{src,lib}/**/?(*.)+(spec|test).js?(x)",
        "!{src,lib}/**/*+(Spec|Test).js?(x)",
    ],
    coverageAnalysis: "perTest",
    ignoreStatic: true,
}
