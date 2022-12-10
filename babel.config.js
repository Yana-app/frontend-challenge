module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "~components": "./src/components",
            "~features": "./src/features",
            "~hooks": "./src/hooks",
            "~icons": "./src/icons",
            "~navigators": "./src/navigators",
            "~store": "./src/store",
            "~theme": "./src/theme",
            "~utils": "./src/utils",
          }
        }
      ]
    ]
  };
};
