module.exports = {
  "presets": [
    [
      "@babel/preset-react",
      {
        "pragma": "dom", 
        "pragmaFrag": "DomFrag", 
        "throwIfNamespace": false
      }
    ]
  ], 
  "overrides": [{
    "exclude": "./src/CaliforniaSVG.js",
    "throwIfNamespace": false
  }],
  "babelrcRoots": [
    ".",
    "./src/.babelrc"
  ],
  "plugins": [
    [
      "transform-react-jsx",
      {
        "throwIfNamespace": false
      }
    ]
  ]
}
