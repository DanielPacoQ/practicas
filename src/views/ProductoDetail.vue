<template>
  <div>
    
      <div class="card-container">
        <div class="card-content">
          <div class="content">
            <h1>Detalles de producto</h1>
            <div class="field">
              <label class="label" for="id">id</label>
              <label class="input" name="id" readonly>{{ clonedProducto.id }}</label>
            </div>
            <div class="field">
              <label class="label" for="codigo">Codigo</label>
              <input
                class="input"
                name="capeCounter"
                type="number"
                v-model="clonedProducto.codigo"
              />
            </div>
            <div class="field">
              <label class="label" for="descripcion">Descripcion</label>
              <input
                class="input"
                name="descripcion"
                v-model="clonedProducto.descripcion"
              />
            </div>
            <div class="field">
              <label class="label" for="precioCompra">Precio Compra</label>
              <input
                class="input"
                name="precioCompra"
                type="number"
                v-model="clonedProducto.precioCompra"
              />
            </div>
            <div class="field">
              <label class="label" for="precioCompra">Precio Compra</label>
              <input
                class="input"
                name="precioCompra"
                type="number"
                v-model="clonedProducto.precioCompra"
              />
            </div>
            <div class="field">
                <label class="label" for="precioCompra">Precio Venta</label>
                <input
                  class="input"
                  name="precioVenta"
                  type="number"
                  v-model="clonedProducto.precioVenta"
                />
              </div>
          </div>
        </div>
        <footer class="card-footer">
          <button
            class="link card-footer-item cancel-button"
            @click="cancelHero()"
          >
            <span>Cancel</span>
          </button>
          <button class="link card-footer-item" @click="save()">
            <span>Save</span>
          </button>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ProductoDetail',
    props: {
      producto: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        clonedProducto: { ...this.producto },
      };
    },
    methods: {
      cancel() {
        this.$emit('cancel');
      },
      save() {
        this.$emit('save', this.clonedProducto);
      }
    },
  };
  </script>
  
<style lang="scss">
@import '@/design/ProductoStyles.scss';
</style>
