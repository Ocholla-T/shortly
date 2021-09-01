<template>
  <section>
    <NavigationBar />
    <main role="main">
      <HeroSection />
      <CallToAction />
      <Services />
      <FooterCTA />
    </main>
    <Footer />
  </section>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import CallToAction from '@/components/CallToAction';
import Services from '@/components/Services';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

export default {
  components: { NavigationBar, HeroSection, CallToAction, Services, FooterCTA, Footer },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
