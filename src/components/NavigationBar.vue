<template>
  <header>
    <nav class="header flex flex-jc-sb flex-ai-c">
      <a href="#" class="logo">
        <img src="../assets/images/logo.svg" alt="shortly" s />
      </a>

      <!-- mobile menu -->
      <a class="hamburger__menu hide-for-desktop" @click="toggleMenu" :class="{ open: hasOpen }">
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
  data() {
    return {
      hasOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.hasOpen = !this.hasOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin: 1.25rem 3.125rem;
  padding: 1.5625rem;
  position: relative;

  @include breakpoint-down(medium) {
    margin: 0;
  }

  &__links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: absolute;
    left: 11rem;

    > a {
      color: $grayish-violet;
      transition: color 300ms ease-in-out;

      &:not(:last-child) {
        margin-right: 1.75rem;
      }

      &:hover {
        color: $very-dark-blue;
      }
    }
  }

  &__cta {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;

    > a {
      color: $grayish-violet;
      transition: color 300ms ease-in-out;
      transition: opacity 300ms ease-in-out;

      // signup button
      &:last-of-type {
        color: white;
        padding: 0.625rem 1.375rem;
        background-color: $cyan;
        border-radius: 1.5625rem;
        color: white;

        &:hover {
          opacity: 0.75;
        }
      }

      &:not(:last-child) {
        margin-right: 1.75rem;

        &:hover {
          color: $very-dark-blue;
        }
      }
    }
  }
}

img {
  width: 7.5625rem;
  height: 2.0625rem;
}

.hamburger__menu {
  cursor: pointer;
  > span {
    display: block;
    width: 1.625rem;
    height: 0.125rem;
    background-color: $grayish-violet;

    transition: all 300ms ease-in-out;
    transform-origin: 3px 1px;

    &:not(:last-child) {
      margin-bottom: 0.3125rem;
    }
  }
  &.open {
    > span:first-child {
      transform: rotate(45deg);
    }

    > span:nth-child(2) {
      opacity: 0;
    }

    > span:last-child {
      transform: rotate(-45deg);
    }
  }
}
</style>
