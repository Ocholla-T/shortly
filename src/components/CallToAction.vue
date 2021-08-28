<template>
  <section>
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
        <form class="call__to__action__form flex flex-jc-c" @submit.prevent="checkInputValidity">
          <input
            ref="shortenInput"
            type="text"
            name="url"
            placeholder="Shorten a link here..."
            :value="url"
            @input="updateUrl"
          />
          <p ref="errorMessage">Please add a link</p>
          <button ref="shortenButton" type="submit">
            <span v-if="!isLoading">Shorten It</span>
            <span v-if="isLoading" class="spinner"></span>
          </button>
        </form>
      </div>
      <div v-if="hasLink">
        <ShortenedLinkCard v-for="(url, index) in allUrls" :key="index">
          <template v-slot:original-link> {{ url.originalLink }}</template>
          <template v-slot:shortened-link>{{ url.shortenedLink }} </template>
        </ShortenedLinkCard>
      </div>
    </div>
  </section>
</template>

<script>
import ShortenedLinkCard from '@/components/slot/ShortenedLinkCard';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  components: {
    ShortenedLinkCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      url: (state) => {
        state.urlModel;
      },
    }),
    ...mapGetters(['allUrls', 'hasLink', 'isLoading']),
  },
  methods: {
    ...mapActions(['shortenUrl']),
    updateUrl(e) {
      const button = this.$refs.shortenButton;
      const input = this.$refs.shortenInput;
      const errorMessage = this.$refs.errorMessage;

      this.$store.commit('updateUrl', e.target.value);

      if (e.target.value.length !== 0) {
        button.classList.remove('margin-mobile');
        input.classList.remove('error');
        errorMessage.style.visibility = 'hidden';
      }
    },
    checkInputValidity() {
      const input = this.$refs.shortenInput;
      const errorMessage = this.$refs.errorMessage;
      const button = this.$refs.shortenButton;

      if (input.value == '') {
        button.classList.add('margin-mobile');
        input.classList.add('error');
        errorMessage.style.visibility = 'visible';
      } else {
        this.shortenUrl();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #f0f1f6;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.container {
  margin: 2.5rem 1rem;

  &::after {
    content: '';
    position: absolute;
    width: 150%;
    margin: 0;
    height: 6.875rem;
    background-color: white;
    top: 0;
    left: 0;
  }
}

.spinner {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
  &::after {
    animation: loading 500ms infinite linear;
    content: '';
    position: absolute;
    border: 2px solid #ffffff80;
    border-left-color: $dark-violet;
    border-radius: 50%;
    top: 0rem;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 1.2rem;
    height: 1.2rem;
  }
}

.call__to__action {
  background-color: $dark-violet;
  border-radius: 0.625rem;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;

  &__form {
    z-index: 1;

    > input {
      padding: 0.5rem 0;
      border-radius: 0.3125rem;
      border: 0px;

      &.error {
        box-shadow: inset 0px 0px 0px 2px #e74c3c;
      }
    }

    > button {
      padding: 0.5rem 0;
      border-radius: 0.3125rem;
      border: 0px;
      background-color: $cyan;
      cursor: pointer;
      color: white;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  //mobile styling
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
        margin-bottom: 0.875rem;
        padding-left: 1rem;

        &::placeholder {
          color: $grayish-violet;
        }
      }

      > p {
        position: absolute;
        font-size: 12px;
        color: #e74c3c;
        font-style: italic;
        top: 2.5rem;
        visibility: hidden;
      }
    }
  }

  //desktop styling
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
        flex-grow: 4;
        margin-right: 1rem;
        padding-left: 1rem;
      }

      > button {
        flex-grow: 1;
        font-size: 1.125rem;
        background-color: $cyan;
      }

      > p {
        position: absolute;
        color: #e74c3c;
        font-style: italic;
        top: 6.5rem;
        left: 3.1rem;
        visibility: hidden;
      }
    }
  }
}

@include breakpoint-down(medium) {
  .margin-mobile {
    margin-top: 1.125rem;
  }
}
</style>
