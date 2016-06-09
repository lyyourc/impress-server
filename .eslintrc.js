module.exports = {
  root: true,
  extends: 'airbnb-base',
  "parser": "babel-eslint",

  // add your custom rules here
  'rules': {
    'semi': [2, "never"],
    'space-before-function-paren': [0],
    'no-shadow': [0],
    'no-param-reassign': [0],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
