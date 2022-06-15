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
        "{src,lib,backend}/**/*.js?(x)",
        "!{src,lib,backend}/**/__tests__/**/*.js?(x)",
        "!{src,lib,backend}/**/?(*.)+(spec|test).js?(x)",
        "!{src,lib,backend}/**/*+(Spec|Test).js?(x)",
    ],
    coverageAnalysis: "perTest",
    ignoreStatic: true,
}
