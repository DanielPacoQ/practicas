<template>
    <header>
      <nav
        class="navbar has-background-dark is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <HeaderBarLogo></HeaderBarLogo>
        <HeaderBarLinks></HeaderBarLinks>
      </nav>
    </header>
  </template>
  
  <script>

  import HeaderBarLogo from '@/components/header-bar-logo';
  import HeaderBarLinks from '@/components/header-bar-links';
  
  export default {
    name: 'HeaderBar',
    components: { HeaderBarLogo, HeaderBarLinks },
  };
  </script>
  
  <style lang="scss">
  @import '@/design/ProductoStyles.scss';
  </style>