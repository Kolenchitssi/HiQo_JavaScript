module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": false
      },
      "AssignmentExpression": {
        "array": false,
        "object": false
      }
    }, {
        "enforceForRenamedProperties": false
      }]
  }
};
