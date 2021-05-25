module.exports = {
  setupFilesAfterEnv: ['jest-plugin-context/setup', './jest.setup'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^@commons/(.*)$': '<rootDir>/src/commons/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
