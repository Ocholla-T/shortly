<template>
  <section class="services">
    <div class="services__introduction flex flex-jc-c flex-ai-c">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your lists are performing across the web with our advanced statistics dashboard
      </p>
    </div>
    <div class="services__card__container">
      <ServicesCard class="services__card">
        <template v-slot:card-image>
          <img src="@/assets/images/icon-brand-recognition.svg" alt="" />
        </template>
        <template v-slot:card-title>
          Brand Recognition
        </template>
        <template v-slot:card-content>
          Boost your brand recognition with each click. Generic links don’t mean a thing. Branded
          links help instil confidence in your content.
        </template>
      </ServicesCard>
      <ServicesCard class="services__card">
        <template v-slot:card-image>
          <img src="@/assets/images/icon-detailed-records.svg" alt="" />
        </template>
        <template v-slot:card-title>
          Detailed Records
        </template>
        <template v-slot:card-content>
          Gain insights into who is clicking your links. Knowing when and where people engage with
          your content helps inform better decisions.
        </template>
      </ServicesCard>
      <ServicesCard class="services__card">
        <template v-slot:card-image>
          <img src="@/assets/images/icon-fully-customizable.svg" alt="" />
        </template>
        <template v-slot:card-title>
          Fully Customizable
        </template>
        <template v-slot:card-content>
          Improve brand awareness and content discoverability through customizable links,
          supercharging audience engagement.
        </template>
      </ServicesCard>
    </div>
  </section>
</template>

<script>
import ServicesCard from '@/components/slot/ServicesCard';

export default {
  name: 'Services',
  components: {
    ServicesCard,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.services {
  background-color: #f0f1f6;
  padding: 1rem;
  position: relative;

  @include breakpoint-up(large) {
    display: flex;
    flex-direction: column;
    padding: 0 9.125rem;
  }
  &__introduction {
    flex-direction: column;
    text-align: center;
    margin-bottom: 5rem;

    @include breakpoint-up(large) {
      padding: 3rem 14rem;
    }
    > h2 {
      color: $very-dark-violet;
      font-size: 1.625rem;
      margin-bottom: 1rem;
    }

    > p {
      color: $grayish-violet;
    }
  }

  &__card {
    position: relative;
    &:nth-last-of-type(2)::before,
    &:last-of-type::before {
      position: absolute;
      content: '';
      background-color: $cyan;
      top: -7rem;
      width: 0.625rem;
      height: 4.375rem;

      @include breakpoint-up(large) {
        top: 5.5rem;
        left: -1.3rem;
        transform: rotate(90deg);
        height: 2rem;
      }
    }

    @include breakpoint-up(large) {
      &:nth-of-type(2) {
        top: 3rem;
      }
      &:last-of-type {
        top: 6rem;

        &::before {
          top: 2.5rem;
        }
      }
      &:not(:last-of-type) {
        margin-right: 2rem;
      }
      &__container {
        display: flex;
        flex-direction: row;
        padding-bottom: 7rem;
      }
    }
  }
}
</style>
