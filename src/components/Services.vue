<template>
  <section class="services">
    <div class="services__introduction flex flex-jc-c flex-ai-c">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your lists are performing across the web with our advanced statistics dashboard
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.services {
  margin: 0 1rem;
  &__introduction {
    flex-direction: column;
    text-align: center;
    margin-bottom: 3rem;
    > h2 {
      color: $very-dark-violet;
      font-size: 1.625rem;
      margin-bottom: 1rem;
    }

    > p {
      color: $grayish-violet;
      font-size: 0.875rem;
    }
  }
}
</style>
