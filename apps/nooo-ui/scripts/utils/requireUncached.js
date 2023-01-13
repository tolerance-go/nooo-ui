function requireUncached(/** @type {string} */ module) {
   delete require.cache[require.resolve(module)]
   return require(module)
}

module.exports = requireUncached
