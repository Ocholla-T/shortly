<template>
  <section class="hero">
    <div class="hero__image">
      <img
        class="hero__illustration"
        src="../assets/images/illustration-working.svg"
        alt="working illustration"
      />
    </div>
    <div class="hero__text">
      <h1 class="hero__heading">More than just shorter links</h1>
      <p class="hero__paragraph">
        Build your brand's recognition and get detailed insights on how your links are performing
      </p>

      <button class="button">Get Started</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style lang="scss" scoped>
.hero {
  overflow: hidden;
  &__heading {
    font-weight: 700;
    color: $very-dark-blue;
  }

  &__paragraph {
    color: $grayish-violet;
  }

  @include breakpoint-down(medium) {
    margin-left: 1rem;
    text-align: center;

    &__image {
      margin-top: 1rem;
      overflow: hidden;
    }

    &__illustration {
      width: 125%;
      height: 50%;
    }

    &__text {
      margin: 1rem;
    }

    &__heading {
      margin-top: 1.5rem;
      font-size: 2.5rem;
      line-height: 1.1;
    }

    &__paragraph {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }
  @include breakpoint-up(large) {
    display: grid;
    padding-left: 8.6875rem;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
    justify-items: start;

    &__image {
      grid-column: 2;
      grid-row: 1;
      overflow: hidden;
      width: 100%;
    }

    &__text {
      grid-column: 1;
      grid-row: 1;
      align-self: center;
      justify-self: start;
      width: 85%;
    }

    &__heading {
      font-size: 3.5rem;
      line-height: 1.1;
    }

    &__paragraph {
      margin: 0.75rem 0 2rem 0;
    }
  }
}
</style>
