<template>
  <header>
    <nav class="header flex flex-jc-sb flex-ai-c">
      <a href="#" class="logo">
        <img src="../assets/images/logo.svg" alt="shortly" s />
      </a>

      <!-- mobile menu -->
      <a href="#" class="hamburger__menu hide-for-desktop">
        <span></span>
        <span></span>
        <span></span>
      </a>

      <!-- desktop-menu -->
      <div class="hide-for-mobile header__links ">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </div>
      <div class=" hide-for-mobile header__cta ">
        <a href="#">Login</a>
        <a href="#" class="sign-up-button">Sign Up</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 24px;

  &__links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    > a {
      color: $grayish-violet;
    }
  }

  &__cta {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;

    > a {
      color: $grayish-violet;

      // signup button
      &:last-of-type {
        color: white;
        padding: 8px 20px;
        background-color: $cyan;
        border-radius: 25px;
        color: white;
      }
    }
  }
}

img {
  width: 7.5625rem;
  height: 2.0625rem;
}

.hamburger__menu {
  > span {
    display: block;
    width: 26px;
    height: 3px;
    background-color: $grayish-violet;

    &:not(:last-child) {
      margin-bottom: 0.3125rem;
    }
  }
}
</style>
