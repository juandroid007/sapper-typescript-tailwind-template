const autoPreprocess = require('svelte-preprocess');

const defaults = {
  script: "typescript",
}

const preprocessors = {
  postcss: true,
}

module.exports = {
  preprocess: autoPreprocess({
    ...preprocessors,
    defaults
  }),
  defaults
}
