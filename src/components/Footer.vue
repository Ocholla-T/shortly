<template>
  <section class="footer flex flex-ai-c ">
    <div>
      <img class="footer__logo" src="@/assets/images/logo.svg" alt="brand icon" />
    </div>

    <div class="container">
      <div class="footer__text">
        <h2>Features</h2>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>
      <div class="footer__text">
        <h2>Resources</h2>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </div>
      <div class="footer__text">
        <h2>Company</h2>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>
      <div class="footer__social flex flex-jc-c">
        <img src="@/assets/images/icon-facebook.svg" alt="" />
        <img src="@/assets/images/icon-twitter.svg" alt="" />
        <img src="@/assets/images/icon-pinterest.svg" alt="" />
        <img src="@/assets/images/icon-instagram.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer {
  flex-direction: column;

  background-color: $very-dark-blue;
  padding: 4rem 9.125rem;

  @include breakpoint-up(large) {
    flex-direction: row;
    gap: 22%;
    align-items: flex-start;
    .container {
      display: flex;
      gap: 15%;
      align-items: flex-start;
    }
  }

  &__logo {
    filter: brightness(0) invert(1);
  }

  &__text {
    text-align: center;
    margin-top: 2rem;
    white-space: nowrap;

    > h2 {
      color: white;
      margin-bottom: 1.5rem;
    }

    > p {
      font-size: 1rem;
      color: $gray;
      margin-bottom: 0.75rem;
    }
  }

  &__social {
    margin: 2rem 0;
    gap: 1.5rem;
  }

  &__text,
  &__social {
    @include breakpoint-up(large) {
      margin: 0;
      text-align: left;
    }
  }
}
</style>
