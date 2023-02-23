<template>
  <div>
    <router-view v-if="showModal" @close="showModal = false" :to="{ name: 'popup' }">
    </router-view>
    <div class="main-section"><span class="title">Productos</span></div>
    <div class="main-section">
      <v-btn color="green" append-icon="mdi mdi-plus">Nuevo</v-btn>
    </div>
    <div v-if="!productos.length">
      <p>No existen productos para desplegar</p>
    </div>
    <v-data-iterator
      :items="productos"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      hide-actions
      row
      wrap
    >
      <v-table class="table" v-if="productos.length">
        <tr>
          <th>Id</th>
          <th class="d-sm-none d-md-block">Código</th>
          <th>Descripción</th>
          <th>Precio de compra</th>
          <th>Precio de venta</th>
          <th>Existencia</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
        <tr v-for= "producto in productos" :key="producto.id">
          <td>{{producto.id}}</td>
          <td class="d-sm-none d-md-block">{{producto.codigo}}</td>
          <td>{{producto.descripcion}}</td>
          <td>{{producto.precioCompra}}</td>
          <td>{{producto.precioVenta}}</td>
          <td>{{producto.existencia}}</td>
          <td>
            <v-btn icon="mdi mdi-pencil" color="orange-darken-2"/>
          </td>
          <td>
            <v-btn icon="mdi mdi-delete" color="red" @click="showModal = true"/>
          </td>
        </tr>
      </v-table>
    </v-data-iterator>
  </div>
  
</template>

<script>

const dbproductos = [
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
];

  export default {
    name: 'ProductosView',
    loading: true,
    data() {
      return {
        rowsPerPageItems: [4, 8, 12],
        pagination: {
          rowsPerPage: 4
        },
        showModal: false,
        productos : [],
      };
    },
  created() {
    this.loadProductos();
  },
  methods: {
    async getProductos() {
      return new Promise(resolve => {
        setTimeout(() => resolve(dbproductos), 1500);
      });
    },
    async loadProductos() {
      this.productos = [];
      this.productos = await this.getProductos();
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/design/ProductoStyles.scss';
</style>
