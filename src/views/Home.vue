<template>
  <div>
    <NavigationBar />
    <HeroSection />
    <CallToAction />
    <Services />
    <FooterCTA />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import CallToAction from '@/components/CallToAction';
import Services from '@/components/Services';
import FooterCTA from '@/components/FooterCTA';

export default {
  components: { NavigationBar, HeroSection, CallToAction, Services, FooterCTA },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
