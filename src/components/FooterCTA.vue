<template>
  <section class="footerCTA flex flex-jc-c flex-ai-c">
    <img
      class="footerCTA__image hide-for-desktop"
      src="@/assets/images/bg-boost-mobile.svg"
      alt="background image"
    />
    <img
      class="footerCTA__image hide-for-mobile"
      src="@/assets/images/bg-boost-desktop.svg"
      alt="background image"
    />

    <div class="footerCTA__text">
      <h2>
        Boost your links today
      </h2>
      <button class="button">Get Started</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterCTA',
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footerCTA {
  position: relative;
  background-color: $dark-violet;
  min-height: 20rem;

  @include breakpoint-up(large) {
    min-height: 15rem;
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &__text {
    text-align: center;

    z-index: 1;
    > h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: white;
    }
  }
}
</style>
