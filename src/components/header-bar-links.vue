<template>
  <div class="navbar-menu">
      <div class="navbar-item">
          <router-link
          tag="button"
          :to="{ name: 'home' }"
          class="header-item"
          >
            Productos
          </router-link>
          <div class="header-item">Vender</div>
          <div class="header-item">Ventas</div>
          <router-link
            tag="button"
            :to="{ name: 'contacto' }"
            class="header-item"
          >
          Contacto
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBarLinks',
};
</script>
