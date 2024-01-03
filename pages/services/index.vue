<template>
  <div>
    <the-header />
  </div>
  <!--  PORTADA -->
  <div class="portada">
    <div class="portada__text-container">
      <p class="portada__subtitle">Nombre del servicio</p>
      <p class="portada__description">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <div class="timeline">
        <v-timeline side="end" align="start">
          <v-timeline-item dot-color="#1D48FF">
            <div>
              <p class="timeline__description">
                Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
                efficitur neque. Ut diam quam, semper iaculis condimentum ac,
                vestibulum eu nislkasds aslkdsl.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item dot-color="#1D48FF">
            <div>
              <p class="timeline__description">
                Qu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                Ut commodo efficitur neque. Ut diam quam, semper iaculis
                condimentum ac, vestibulum eu nisl.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item dot-color="#1D48FF">
            <div>
              <p class="timeline__description">
                Ut diam quam, semper iaculis condimentum ac, vestibulum eu
                nisl.Qu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                Ut commodo efficitur neque.
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>
    <div class="portada__img-container">
      <img src="@/assets/img/img04.png" />
    </div>
  </div>

  <div class="btn-formulario">
    <v-btn
      class="text-white text-subtitle-1"
      height="52px"
      rounded="xl"
      size="large"
      color="#1D48FF"
      style="padding: 0 5rem"
      @click="dialog = !dialog"
    >
      Solicitar servicio
    </v-btn>
  </div>

  <div class="formulario" v-if="dialog">
    <div class="formulario__img-container">
      <img src="@/assets/img/img15.png" />
    </div>
    <div class="formulario__form-container">
      <v-form @submit.prevent>
        <v-row>
          <div class="formulario__col">
            <p class="formulario__title">E-mail</p>
            <v-text-field
              variant="solo"
              rounded
              dark
              class="formulario__input"
              v-model="email"
              placeholder="example@gmail.com"
            ></v-text-field>
            <p class="formulario__title">Celular</p>
            <v-text-field
              variant="solo"
              rounded
              dark
              class="formulario__input"
              v-model="celular"
            ></v-text-field>
          </div>
          <div class="formulario__col">
            <p class="formulario__title">Nombre</p>
            <v-text-field
              variant="solo"
              rounded
              dark
              class="formulario__input"
              v-model="nombre"
            ></v-text-field>
            <p class="formulario__title">Cuentame sobre tu proyecto</p>
            <v-text-field
              variant="solo"
              rounded
              dark
              class="formulario__input"
              v-model="proyecto"
            ></v-text-field>
          </div>
        </v-row>
        <v-row class="d-flex" justify="center">
          <v-btn
            type="submit"
            class="mt-2 text-indigo-accent-4 text-subtitle-1"
            height="52px"
            rounded="xl"
            size="large"
            style="padding: 0 8rem"
            >Comencemos</v-btn
          >
        </v-row>
      </v-form>
    </div>
  </div>

  <div>
    <the-footer class="my-0" style="margin-top:0 !important;"/>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data: () => ({
    email: "",
    dialog: false
  }),
};
</script>