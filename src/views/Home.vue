<template>
  <div>
    <NavigationBar />
    <HeroSection />
    <CallToAction />
    <Services />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import CallToAction from '@/components/CallToAction';
import Services from '@/components/Services';

export default {
  components: { NavigationBar, HeroSection, CallToAction, Services },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
