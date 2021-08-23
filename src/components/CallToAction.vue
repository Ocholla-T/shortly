<template>
  <div class="container">
    <div class="call__to__action flex flex-ai-c flex-jc-c">
      <img
        class="hide-for-desktop"
        src="../assets/images/bg-shorten-mobile.svg"
        alt="background image"
      />
      <img
        class="hide-for-mobile"
        src="../assets/images/bg-shorten-desktop.svg"
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
  margin: 3.5rem 1rem;
}
.call__to__action {
  background-color: $dark-violet;
  border-radius: 0.625rem;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  &__form {
    z-index: 1;

    > input {
      padding: 0.5rem 0;
      border-radius: 0.3125rem;
      border: 0px;

      &:last-of-type {
        background-color: $cyan;
        cursor: pointer;
        color: white;
      }
    }
  }

  @include breakpoint-down(medium) {
    width: 100%;
    height: 8.75rem;

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
      width: 85%;
      flex-direction: column;
      box-sizing: border-box;

      > input {
        width: 100%;
        height: 85%;
        font-size: 0.875rem;

        &:first-of-type {
          margin-bottom: 0.875rem;
          padding-left: 1rem;

          &::placeholder {
            color: $grayish-violet;
          }
        }
      }
    }
  }

  @include breakpoint-up(large) {
    flex-direction: column;
    margin: 0 8.125rem;
    height: 9rem;
    border-radius: 0.625rem;

    > img {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 0;
    }

    &__form {
      height: 35%;
      width: 90%;
      > input {
        font-size: 1.125rem;

        &:first-of-type {
          flex-grow: 4;
          margin-right: 1rem;
          padding-left: 1rem;
        }

        &:last-of-type {
          flex-grow: 1;
          background-color: $cyan;
        }
      }
    }
  }
}
</style>
