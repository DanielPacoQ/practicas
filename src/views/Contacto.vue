<template>
    <div style="background: palevioletred">
        <div>
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
                    <textarea 
                        maxlength="50"
                        class="input"
                        style="resize: none; height: 150px;"
                        name="message"
                        v-model="contacto.message"
                        required
                    />
                  </div>

                <footer class="card-footer">

                <v-btn class="sb-btn" type="submit" block @click="save()">
                    <span>Enviar</span>
                </v-btn>

                </footer>

                </form>
              </div>

            </div>
          </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

    export default {

        data() {
            return {
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
        }
    }

</script>

<style lang="scss" scoped>
@import '@/design/ContactoStyles.scss';
</style>