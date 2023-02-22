<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section columns">
      <main class="column">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>

import ProductosView from '@/views/ProductosView'
import HeaderBar from '@/components/header-bar';

export default {
  name: 'App',
  components: {
    ProductosView, HeaderBar
  }
}
</script>
