<template>
  <v-card elevation="12">
    <div style="background: palevioletred">
            <div class="card-container">
              <div class="card-content">
                <form class="content">

                  <h1>Formulario de contacto</h1>

                  <p>Escribenos y en breve los pondremos en contacto contigo</p>

                   <div class="field">
                    <label class="label" for="nombre">Nombre</label>
                    <input
                        class="input" 
                        name="nombre" 
                        pattern="[a-zA-Z][a-zA-Z ]+" 
                        v-model="contacto.nombre"
                        required
                    />
                  </div>  

                  <div class="field">
                    <label class="label" for="email">Email</label>
                    <input
                      class="input"
                      name="capeCounter"
                      type="email"
                      v-model="contacto.email"
                      required
                    />
                  </div>

                  <div class="field">
                    <label class="label" for="telefono">Teléfono</label>
                    <input
                      class="input"
                      name="telefono"
                      type="tel"
                      v-model="contacto.telefono"
                      required
                    />
                  </div>
                  
                  <div class="field">
                    <label class="label" for="url">Sitio web</label>
                    <input
                        class="input"
                        name="url"
                        type="url" 
                        v-model="contacto.url"
                        required
                    />
                  </div>

                  <div class="field">
                    <label class="label" for="asunto">Asunto</label>
                    <input
                        class="input"
                        name="asunto"
                        v-model="contacto.asunto"
                        required
                    />
                  </div>

                  <div class="field">
                    <label class="label" for="message">Message</label>
                    <label>
                    <v-tooltip v-model="show" activator="parent" location="end">
                      50?
                    </v-tooltip>
                    </label>
                     <v-textarea  maxlength="50" no-resize @input="showToolTip" v-model="contacto.mensaje"></v-textarea>
                  </div>

                <footer class="card-footer">

                <v-btn class="sb-btn" type="submit" block>
                    <span>Enviar</span>
                </v-btn>

                </footer>

                </form>
              </div>

            </div>
  </div>
</v-card>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

    export default {
        setup: () => ({ v$: useVuelidate() }),
        data() {
            return {
                show: false,
                contacto: 
                {
                    nombre: '',
                    email: '',
                    telefono: '',
                    sitioWeb: '',
                    asunto: '',
                    mensaje: ''
                }
            }
        },
        validations () {
          return {
            contacto: {
              nombre: { required, email },
              email: { required, email },
              telefono: '',
              sitioWeb: '',
              asunto: '',
              mensaje: ''
            }
          }
        },
        methods: {
          showToolTip(){
            this.show = this.contacto.mensaje.length > 49 
            console.log(this.show)
          }
        }
      }

</script>

<style lang="scss" scoped>
@import '@/design/ContactoStyles.scss';
</style>