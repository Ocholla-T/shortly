<template>
  <div class="shorten flex">
    <p>
      <slot name="original-link" />
    </p>
    <hr />
    <p ref="shortenedLink">
      <slot name="shortened-link" />
    </p>
    <a ref="copyButton" @click="copyLink">Copy</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copyLink() {
      const link = this.$refs.shortenedLink;
      const copyButton = this.$refs.copyButton;
      if (this.copied === false) {
        this.copied = true;
        navigator.clipboard.writeText(link.innerText).then(async () => {
          await setTimeout(() => {
            copyButton.innerText = 'Copied!';
            copyButton.style.transition = 'background-color 200ms ease-1n';
            copyButton.style.backgroundColor = 'hsl(255, 11%, 22%)';
          }, 200);
        });
      }
      if (this.copied === true) {
        setTimeout(() => {
          copyButton.style.transition = 'background-color 200ms ease-out';
          copyButton.innerText = 'Copy';
          copyButton.style.backgroundColor = 'hsl(180, 66%, 49%)';
          this.copied = false;
        }, 2500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.shorten {
  > a {
    &:hover {
      opacity: 0.5;
    }
  }
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

    > hr {
      width: 100%;
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

  @include breakpoint-up(large) {
    margin: 1rem 8.125rem;
    border-radius: 0.625rem;
    background-color: white;
    padding: 1rem 3rem;
    align-items: center;
    > hr {
      display: none;
    }

    > p {
      &:first-of-type {
        flex-grow: 3;
      }

      &:last-of-type {
        color: $cyan;
      }
    }

    > a {
      margin-left: 1rem;
      text-align: center;
      padding: 0.5rem 0;
      border-radius: 0.3125rem;
      border: 0px;
      background-color: $cyan;
      cursor: pointer;
      color: white;
      width: 7rem;
    }
  }
}
</style>
