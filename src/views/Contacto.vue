<template>
  <v-card elevation="12">
    <div style="background: palevioletred">
            <div class="card-container">
              <div class="card-content">
                <form class="content">

                  <h1>Formulario de contacto</h1>

                  <p>Escribenos y en breve los pondremos en contacto contigo</p>

                   <div class="field">
                    <label class="label" for="nombre">Nombre <v-label class="alert" v-if="v$.nombre.$error" text="*"/></label>
                    <input
                        class="input"
                        :class="{'alert-input':v$.nombre.$error}" 
                        name="nombre" 
                        pattern="[a-zA-Z][a-zA-Z ]+" 
                        v-model="contacto.nombre"
                    />
                  </div>  

                  <div class="field">
                    <label class="label" for="email">Email <v-label class="alert" v-if="v$.email.$error" text="*"/></label>
                    <input
                      class="input"
                      :class="{'alert-input':v$.email.$error}" 
                      name="capeCounter"
                      type="email"
                      v-model="contacto.email"
                    />
                  </div>

                  <div class="field">
                    <label class="label" for="telefono">Teléfono <v-label class="alert" v-if="v$.telefono.$error" text="*"/></label>
                    <input
                      class="input"
                      :class="{'alert-input':v$.telefono.$error}" 
                      name="telefono"
                      type="tel"
                      v-model="contacto.telefono"
                    />
                  </div>
                  
                  <div class="field">
                    <label class="label" for="url">Sitio web <v-label class="alert" v-if="v$.url.$error" text="*"/></label>
                    <input
                        class="input"
                        :class="{'alert-input':v$.url.$error}" 
                        name="url"
                        type="url" 
                        v-model="contacto.url"
                    />
                  </div>

                  <div class="field">
                    <label class="label" for="asunto">Asunto <v-label class="alert" v-if="v$.asunto.$error" text="*"/></label>
                    <input
                        class="input"
                        :class="{'alert-input':v$.asunto.$error}" 
                        name="asunto"
                        v-model="contacto.asunto"
                    />
                  </div>

                  <div class="field">
                    <label class="label" for="message">Message 
                      
                      <v-tooltip
                      v-model="show"
                      location="top"
                    >
                      <template v-slot:activator="{ props }">
                        
                        <v-btn
                          icon="mdi-help"
                          v-bind="props">
                        </v-btn>

                      </template>
                      <span>50 caracteres?</span>
                    </v-tooltip>
                    <v-label class="alert" v-if="v$.mensaje.$error" text="*"/>
                    </label>

                     <textarea class="textarea" maxlength="50" :class="{'alert-input':v$.mensaje.$error}" v-model="contacto.mensaje"/>
                  </div>

                <v-btn class="sb-btn" @click="submitForm" block>
                    <span>Enviar</span>
                </v-btn>

                <div class="field">
                  <label class="label" v-if="v$.$error">
                    <v-label class="alert" text="*"/> Los campos son obligatorios
                  </label>
                  
                </div>

                </form>
              </div>

            </div>
  </div>
</v-card>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email , maxLength } from '@vuelidate/validators'
import { reactive } from 'vue'

export default {
  data(){
    return{
      show: false
    }
  },
  setup () {
    const contacto = 
          reactive({
              nombre: '',
              email: '',
              telefono: '',
              url: '',
              asunto: '',
              mensaje: ''
          })
    const rules = {
        nombre: { required },
        email: { required, email },
        telefono: { required },
        url: { required, },
        asunto: { required  },
        mensaje: { required , maxLength: maxLength(50) }
      }

      const v$ = useVuelidate(rules, contacto)

      return { contacto, v$ }
  },
  methods: {
    submitForm() {
        this.v$.$validate() // checks all inputs
        if (!this.v$.$error) {
          // if ANY fail validation
          alert('Form successfully submitted.')
        } else {
          alert('Form failed validation')
        }
    }
  },
}

</script>

<style lang="scss" scoped>
@import '@/design/ContactoStyles.scss';
</style>