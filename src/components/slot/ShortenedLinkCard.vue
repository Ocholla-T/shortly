<template>
  <div class="shorten flex">
    <p>
      <slot name="original-link" />
    </p>
    <hr />
    <p>
      <slot name="shortened-link" />
    </p>
    <a href="#">Copy</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.shorten {
  @include breakpoint-down(medium) {
    border: 1px black;
    flex-direction: column;
    background-color: white;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 0.625rem;

    > p {
      margin: 0.5rem 0;
      color: $very-dark-violet;
      font-size: 0.875rem;

      &:last-of-type {
        color: $cyan;
      }
    }

    > a {
      display: block;
      text-align: center;
      padding: 0.5rem 0;
      border-radius: 0.3125rem;
      border: 0px;
      background-color: $cyan;
      cursor: pointer;
      color: white;
      width: 100%;
    }
  }
}
</style>
