export default {
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "./src/styleMock.js",
  },
};
