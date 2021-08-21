<template>
  <div>
    <NavigationBar />
    <HeroSection />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';

export default {
  components: { NavigationBar, HeroSection },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
