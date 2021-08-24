module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/styles.scss";`,
      },
    },
  },
  devServer: {
    proxy: 'https://api.shrtco.de/v2/',
  },
};
