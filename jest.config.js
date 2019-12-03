module.exports = {
    verbose: true,
    collectCoverage: false,
    setupFiles: ["<rootDir>/setupEnzyme.js"],
    transform: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules']
};
