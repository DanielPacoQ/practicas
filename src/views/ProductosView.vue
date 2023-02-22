<template>
  <div>
    <v-icon icon="mdi:mdi-home" />
    <v-btn icon="mdi:mdi-home" color="blue"> </v-btn>
    <PopUp v-if="showModal" @close="showModal = false">
    </PopUp>
    <div class="main-section"><span class="title">Productos</span></div>
    <div class="main-section">
      <v-btn>Nuevo</v-btn>
    </div>
    <div v-if="!productos.length">
      <span>No existen productos para desplegar</span>
    </div>
    <div class="main-section">
      <table class="table" v-if="productos.length">
        <tr>
          <th>Id</th>
          <th>Código</th>
          <th>Descripción</th>
          <th>Precio de compra</th>
          <th>Precio de venta</th>
          <th>Existencia</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
        <tr v-for= "producto in productos" :key="producto.id">
          <td>{{producto.id}}</td>
          <td>{{producto.codigo}}</td>
          <td>{{producto.descripcion}}</td>
          <td>{{producto.precioCompra}}</td>
          <td>{{producto.precioVenta}}</td>
          <td>{{producto.existencia}}</td>
          <td>
            <v-btn icon=" mdi mdi-home" color="blue">
            <router-link
            tag="button"
            :to="{ name: 'producto-detail', props: { producto } }"
            >
            </router-link>
            </v-btn>
          </td>
          <td><v-btn icon="fas fa-plus" @click="showModal = true"></v-btn></td>
        </tr>
      </table>
    </div>
  </div>
  
</template>

<script>

import PopUp from '@/components/popup-modal'

  export default {
    name: 'ProductosView',
    components: { PopUp },
    data() {
      return {
        showModal: false,
        productos: [
          {
            id: 1,
            codigo: 1,
            descripcion: 'Galletas chokis',
            precioCompra: 10.00,
            precioVenta: 15.00,
            existencia: 2.00
          },
          {
            id: 2,
            codigo: 2,
            descripcion: 'Mermelada de fresa',
            precioCompra: 65.00,
            precioVenta: 80.00,
            existencia: 97.00
          },
          {
            id: 3,
            codigo: 3,
            descripcion: 'Aceite',
            precioCompra: 18.00,
            precioVenta: 20.00,
            existencia: 100.00
          },
          {
            id: 4,
            codigo: 4,
            descripcion: 'Palomitas de maíz',
            precioCompra: 10.00,
            precioVenta: 15.00,
            existencia: 98.00
          },
          {
            id: 5,
            codigo: 5,
            descripcion: 'Doritos',
            precioCompra: 5.00,
            precioVenta: 8.00,
            existencia: 99.00
          }
        ],
      };
    },
  methods: {
  }
}
</script>

<style lang="scss">
@import '@/design/ProductoStyles.scss';
</style>
