<template>
  <div class="container">
    <div class="call__to__action flex flex-ai-c flex-jc-c">
      <img
        class="hide-for-desktop"
        src="../assets/images/bg-shorten-mobile.svg"
        alt="background image"
      />
      <div class="call__to__action__form flex flex-jc-c">
        <input type="text" name="shorten" placeholder="Shorten a link here..." />
        <input type="button" value="Shorten It!" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  @include breakpoint-down(medium) {
    margin: 3.5rem 1rem;
  }
}
.call__to__action {
  @include breakpoint-down(medium) {
    width: 100%;
    height: 8.75rem;
    position: relative;
    overflow: hidden;
    background-color: $dark-violet;
    border-radius: 0.625rem;

    > img {
      position: absolute;
      width: 80%;
      height: 75%;
      right: 0;
      top: 0;

      z-index: 0;
    }

    &__form {
      position: relative;
      z-index: 1;
      width: 85%;
      height: 85%;

      flex-direction: column;
      box-sizing: border-box;

      > input {
        width: 100%;
        padding: 0.5rem 0;
        border-radius: 0.3125rem;
        border: 0px;
        font-size: 0.875rem;

        &:not(:last-of-type) {
          margin-bottom: 0.875rem;
          padding-left: 1rem;

          &::placeholder {
            color: $grayish-violet;
          }
        }

        &:last-of-type {
          background-color: $cyan;
          color: white;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
