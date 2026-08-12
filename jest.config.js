export default {
  testEnvironment: "jsdom",
  collectCoverage: false,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/styleMock.js",
  },
};
