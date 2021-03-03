module.exports = {
  locales: ["en", "es"],
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["pages", "components"],
      exclude: ["node_modules", ".next"],
    },
  ],
  format: "minimal",
  sourceLocale: "en",
}
