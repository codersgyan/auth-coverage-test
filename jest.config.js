/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    collectCoverage: true,
    coverageProvider: "v8",
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}", // Adjust as per your source file structure
        "!src/tests/**", // Exclude the test directory
        "!**/node_modules/**",
        "!**/vendor/**",
    ],
};
