module.exports = {
  hooks: {
    "pre-commit": "npm run lint-staged",
    "pre-push": "npm run test",
  },
};
