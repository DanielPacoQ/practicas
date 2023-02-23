<template>
    <v-card>
      <v-layout>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
  
        <v-app-bar
          color="primary"
          prominent
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          
          <router-link
            tag="button"
            :to="{ name: 'home' }"
            class="header-item"
          >
          Producto
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

        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
          location="left"
          temporary
        >

        <router-link
            tag="button"
            :to="{ name: 'home' }"
            class="header-link"
          >
          Producto
          </router-link>
          <div class="header-link">Vender</div>
          <div class="header-link">Ventas</div>
          <router-link
            tag="button"
            :to="{ name: 'contacto' }"
            class="header-link"
          >
          Contacto
          </router-link>
          
        </v-navigation-drawer>
      </v-layout>
    </v-card>
  </template>

  <script>
  export default {
    name:'SideBar',
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'home',
        },
        {
          title: 'contacto',
        }
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>