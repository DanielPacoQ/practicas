<template>
    <header>
      <nav
        class="navbar has-background-dark is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        
      <SideBar></SideBar>
      </nav>
    </header>
  </template>
  
  <script>
  import SideBar from '@/components/side-bar-menu';
  
  export default {
    name: 'HeaderBar',
    components: { SideBar },
  };
  </script>
  
  <style lang="scss">
  @import '@/design/HeaderStyles.scss';
  </style>