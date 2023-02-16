"use strict";
module.exports = {
  "{src,server}/**/!(*.min).js": [
    "eslint --fix",
    "prettier --write"
  ],
  "{src,server}/**/*.{ts,vue}": [
    "eslint --fix",
    "prettier --write"
  ],
  "src/**/*.{html,css,scss,sass,stylus}": [
    "prettier --write"
  ]
}