module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/styles.scss";`,
      },
    },
  },
  devServer: {
    proxy: 'https://api.shrtco.de/v2/',
  },
};
