import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/main.tsx",
    "!src/**/index.{ts,tsx}",
    "!src/**/__tests__/**",
    "!src/**/*.{test,spec}.{ts,tsx}",
    "!src/**/__mocks__/**",
  ],
  coverageReporters: ["text", "lcov"],
  coverageDirectory: "<rootDir>/coverage",
  testPathIgnorePatterns: ["<rootDir>/src/index.ts", "<rootDir>/src/.*/index\\.(ts|tsx)$"],
};

export default config;
