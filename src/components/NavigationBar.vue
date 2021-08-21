<template>
  <header>
    <nav class="header flex flex-jc-sb flex-ai-c">
      <a href="#" class="logo">
        <img src="../assets/images/logo.svg" alt="shortly" s />
      </a>

      <!-- mobile menu -->
      <a class="hamburger__menu hide-for-desktop" @click="toggleMenu" :class="{ open: isOpen }">
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

    <transition name="header__menu__fade">
      <div class="header__menu flex flex-ai-c hide-for-desktop" v-if="isOpen">
        <a href="http://">Features</a>
        <a href="http://">Pricing</a>
        <a href="http://">Resources</a>
        <hr />
        <a href="http://">Login</a>
        <a href="http://">Sign Up</a>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
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

  &__menu {
    background-color: $dark-violet;
    border-radius: 10px;
    padding: 10px 5px;
    margin: 0 1.5625rem;
    height: 50vh;
    flex-direction: column;
    justify-content: space-evenly;

    > a {
      font-size: 1.0625em;
      color: white;

      &:last-of-type {
        color: white;
        padding: 0.625rem 5.5625rem;
        background-color: $cyan;
        border-radius: 1.5625rem;
      }
    }

    > hr {
      width: 85%;
      border: 1px solid $grayish-violet;
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

.header__menu__fade-enter-active {
  animation: fade-in 1s;
}

.header__menu__fade-leave-active {
  animation: fade-out 1s;
}
</style>
