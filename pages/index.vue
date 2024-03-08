<template>
  <div>
    <the-header />
  </div>
  <!--  PORTADA -->
  <div class="portada">
    <div class="portada__text-container">
      <p class="portada__name">Jair Manrique</p>
      <p class="portada__title">
        {{ title }}
        <!-- <br/><span style="color: #34333f">transformación digital</span> <br />para industrias}} -->
      </p>
      <p class="portada__description">
        {{ description }}
      </p>
      <v-btn class="text-white text-subtitle-1" height="52px" rounded="xl" size="large" color="#6855F9"
        style="padding: 0 5rem" href="/about">
        Ver biografía
      </v-btn>
    </div>
    <div class="portada__img-container">
      <img :src="imageP" />
    </div>
  </div>

  <!--  CIFRAS -->
  <div>
    <cifras-component />
  </div>
  <!--  TECNOLOGIAS -->
  <div>
    <tecnologias-component />
  </div>
  <!--  EMPRESAS -->
  <div>
    <empresas-component />
  </div>

  <!--  SERVICIOS -->
  <div>
    <servicios-component />
  </div>

  <!--  AGENDA CITAS
  <div class="portada">
    <div class="portada__text-container">
      <img src="@/assets/img/img10.png" />
      <p class="portada__subtitle">Agenda una llamada</p>
      <p class="portada__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>

      <img style="margin-left: -5rem" src="@/assets/img/img11.png" />
    </div>
    <div class="portada__img-container"></div>
  </div> -->

  <!-- REVISTAS -->
  <div>
    <revistas-component />
  </div>

  <div>
    <the-footer />
  </div>
</template>
<script>
import axios from 'axios'
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
import CifrasComponent from '../components/CifrasComponent.vue'
import TecnologiasComponent from '../components/TecnologiasComponent.vue'
import EmpresasComponent from '../components/EmpresasComponent.vue'
import ServiciosComponent from '../components/ServiciosComponent.vue'
import RevistasComponent from '../components/RevistasComponent.vue'
import '@/assets/css/main.scss'
export default {
  components: {
    TheHeader,
    CifrasComponent,
    TecnologiasComponent,
    EmpresasComponent,
    ServiciosComponent,
    RevistasComponent,
    TheFooter
  },
  data() {
    return {
      portada: [],
      title: null,
      imageP: null,
      description: null
    };
  },
  methods: {
    async getPortada() {
      try {
        const response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/landing/home/');
        this.portada = response.data;
        this.title = this.portada.title;
        this.imageP = this.portada.image;
        this.description = this.portada.description;
      } catch (error) {
        console.error('Error al obtener la información:', error);
      }
    }
  },
  mounted() {
    this.getPortada()
  },
};
</script>