<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-body">
            ¿Esta seguro que desea eliminar el registro?
        </div>

        <div>
            <button class="button" @click="$emit('close')">
              Ok
            </button>
            <button class="button" @click="$emit('close')">
              Cancelar
            </button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name:'PopUp',
    data(){
      return{
        showModal: true
      };
    }
  }
  </script>

<style lang="scss">
  @import '@/design/PopupStyle.scss';
</style>