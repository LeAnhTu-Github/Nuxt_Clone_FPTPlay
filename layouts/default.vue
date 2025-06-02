<template>
  <div>
    <Header />
    <main>
      <div class="container mx-auto pt-16 sm:pt-20">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>
