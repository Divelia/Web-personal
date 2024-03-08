<template>
  <div>
    <the-header />
  </div>
  <!--  PORTADA -->
  <div class="portada">
    <div class="portada__text-container">
      <img src="@/assets/img/img01.png" />
      <p class="portada__subtitle">{{ title }}</p>
      <p class="portada__description">
        {{ description }}
      </p>
    </div>
    <div class="portada__img-container">
      <img :src="imageP" />
    </div>
  </div>

  <!--  BIOGRAFIA -->
  <div>
    <biografia-component/>
  </div>

  <div>
    <the-footer />
  </div>
</template>
<script>
import axios from 'axios'
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'
import BiografiaComponent from '../components/BiografiaComponent.vue'
import '@/assets/css/main.scss'
export default {
  components: {
    TheHeader,
    TheFooter,
    BiografiaComponent
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
      try{
      const response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/landing/about/');
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
<style scoped>
.v-btn {
  text-transform: none !important;
  border-radius: 1.875rem;
  border: 1px solid var(--div-100, #6855F9);
}
</style>