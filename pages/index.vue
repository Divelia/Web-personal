<template>
  <div>
    <the-header />
  </div>
  <!--  PORTADA -->
  <div class="portada">
    <div class="portada__text-container">
      <p class="portada__name">Jair Manrique</p>
      <p class="portada__title">
        Experto en
        <br /><span style="color: #34333f">transformación digital</span>
        <br />para industrias
      </p>
      <p class="portada__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
      <v-btn class="text-white text-subtitle-1" height="52px" rounded="xl" size="large" color="#1D48FF"
        style="padding: 0 5rem">
        Ver biografía
      </v-btn>
    </div>
    <div class="portada__img-container">
      <img src="@/assets/img/img16.png" />
    </div>
  </div>

  <!--  CIFRAS -->
  <div class="cifras">
    <div class="cifras__text-container">
      <p class="portada__subtitle">Cifras</p>
    </div>
    <div class="cifras__cards-container">
      <v-card class="cifras__card" v-for="(estadistica, est) in estadisticas" :key="est">
        <p class="cifras__card-num" v-html="estadistica.number" />
        <p class="cifras__card-title" v-html="estadistica.name" />
      </v-card>
    </div>
  </div>

  <!--  TECNOLOGIAS -->
  <div class="tecnologias">
    <div class="tecnologias__text-container">
      <p class="portada__subtitle">Tecnologías</p>
      <p class="portada__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
    </div>
    <div class="tecnologias__cards-container">
      <v-sheet class="mx-auto" style="
          background: #1d48ff;
          border-radius: 3rem 0rem 0rem 3rem;
          display: flex;
          justify-content: space-around;
        ">
        <v-slide-group class="pa-4" style="display: grid">
          <v-slide-group-item v-for="(tecnologia, n) in tecnologias" :key="n">
            <v-card color="#1d48ff" class="mx-6 my-4 tecnologias__cards" height="215" width="220">
              <p class="tecnologias__title" v-html="tecnologia.name" />
              <img :src="tecnologia.image" style="filter: grayscale(1)" />
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>

  <!--  EMPRESAS -->
  <div class="portada">
    <div class="portada__text-container">
      <p class="portada__subtitle">Empresas fundadas</p>
      <div class="empresas__container-nav">
        <v-sheet class="">
          <v-slide-group class="">
            <v-slide-item class="empresas__nav-card">
              <p @click="empresasFilter" class="empresas__nav-text">Empresas</p>
            </v-slide-item>
            <v-slide-item class="empresas__nav-card">
              <p @click="premiosFilter" class="empresas__nav-text">Reconocimientos y premios</p>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
      <div class="empresas__container-cards">
        <v-card class="empresas__card" v-for="(dataInd, di) in dataFiltro" :key="di">
          <img :src="dataInd.image" />
        </v-card>
      </div>
    </div>
    <div class="portada__img-container">
      <img src="@/assets/img/img08.png" />
    </div>
  </div>

  <!--  SERVICIOS -->
  <div class="tecnologias">
    <div class="tecnologias__text-container">
      <p class="portada__subtitle">Servicios</p>
    </div>
  </div>
  <div style="background: #1d48ff">
    <div class="servicios">
      <div class="servicios__text-container">
        <img src="@/assets/img/img09.png" />
      </div>
      <div class="servicios__cards-container">
        <v-sheet style="background: none; display: flex;justify-content: space-around;">
          <v-slide-group v-model="model" class="pb-10">
            <v-slide-group-item v-for="(item, i) in servicios" :key="i" cols="12" md="4">
              <v-hover v-slot="{ isHovering, props }">
                <v-card class="servicios__card" v-bind="props">
                  <v-card-text class="servicios__cardContainer" >
                    <img class="servicios__image" :src="item.image" />
                    <p class="servicios__title" v-html="item.name" />
                  </v-card-text>
                  <v-expand-transition>
                    <v-card v-if="isHovering" class="v-card--reveal" style="height: 100%;">
                      <v-card-text class="pb-0">
                        <p class="servicios__title" v-html="item.name" />
                        <p class="servicios__description" v-html="item.short_description" />
                      </v-card-text>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </div>

  <!--  AGENDA CITAS -->
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
  </div>

  <!-- REVISTAS -->
  <div class="revista">
    <div class="revista__text-container">
      <p class="portada__subtitle">Revistas y noticieros</p>
    </div>
    <div class="revista__cards-container">
      <v-card class="revista__card" v-for="(revista, r) in revistas" :key="r">
        <img :src="revista.image" />
      </v-card>
    </div>
  </div>

  <div>
    <the-footer />
  </div>
</template>
<script>
import axios from 'axios'
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
import '@/assets/css/main.scss'
//import { mapState, mapActions } from 'vuex'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data: () => ({
    info: '',
    dataFiltro: '',
    reveal: false,
    empresas: null,
    estadisticas: null,
    revistas: null,
    premios: null,
    servicios: null,
    tecnologias: null,
    tab: null
  }),

  methods: {
    async getEstadisticas() {
      let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/estadisticas/');
      this.estadisticas = response.data
    },
    async getTecnologias() {
      let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/tecnologias/');
      this.tecnologias = response.data
    },
    async getEmpresas() {
      let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/empresas-fundadas/');
      this.empresas = response.data
      this.dataFiltro = this.empresas
    },
    empresasFilter() {
      this.dataFiltro = this.empresas
    },
    async getPremios() {
      let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/reconocimientos-premios/');
      this.premios = response.data
    },
    premiosFilter() {
      this.dataFiltro = this.premios
    },
    async getServicios() {
      let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/servicios/');
      this.servicios = response.data
    },
    async getRevistas() {
      let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/revistas-noticieros/');
      this.revistas = response.data
    }
  },
  created() {
    this.getEmpresas()
    this.getTecnologias()
    this.getEstadisticas()
    this.getServicios()
    this.getRevistas()
    this.getPremios()
  },
};
</script>
<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>