<template>
  <div class="card flex flex-jc-c flex-ai-c">
    <div class="card__icon flex flex-jc-c flex-ai-c">
      <slot name="card-image"></slot>
    </div>
    <h2>
      <slot name="card-title"></slot>
    </h2>
    <p>
      <slot name="card-content"></slot>
    </p>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  flex-direction: column;
  border-radius: 0.625rem;
  padding: 2rem 2rem 2.5rem 2rem;
  margin-bottom: 7rem;
  text-align: center;
  position: relative;

  @include breakpoint-up(large) {
    text-align: left;
  }

  &__icon {
    position: absolute;
    top: -3rem;
    width: 6rem;
    height: 6rem;
    background-color: $dark-violet;
    border-radius: 50%;

    @include breakpoint-up(large) {
      left: 2rem;
      top: -2.5rem;
      max-width: 5rem;
      max-height: 5rem;
    }

    > img {
      width: 55%;
      height: 50%;
    }
  }

  > h2 {
    color: $very-dark-violet;
    font-size: 1.625rem;
    @include breakpoint-down(medium) {
      margin: 3rem 0 1rem 0;
    }

    @include breakpoint-up(large) {
      align-self: flex-start;
      font-size: 1.17rem;
      margin: 2rem 0 1rem 0;
    }
  }

  > p {
    color: $grayish-violet;

    @include breakpoint-up(large) {
      font-size: 1rem;
    }
  }
}
</style>
