module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-plugin-context/setup', 'given2/setup'],
  moduleNameMapper: {
    '^@commons/(.*)$': '<rootDir>/src/commons/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@spec/(.*)$': '<rootDir>/spec/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'jsx', 'js', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$',
};
