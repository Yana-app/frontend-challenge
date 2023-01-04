module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "babel-plugin-styled-components",
      [
        "module-resolver",
        {
          alias: {
            "~components": "./src/components",
            "~interfaces": "./src/interfaces",
            "~navigators": "./src/navigators",
            "~screens": "./src/screens",
            "~assets": "./src/assets",
            "~store": "./src/store",
            "~hooks": "./src/hooks",
            "~utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
