const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@unitools/image": "@unitools/image-expo",
            "@unitools/link": "@unitools/link-expo",
          },
        },
      ],
    ],
  };
};
