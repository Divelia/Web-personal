<template>
  <div>
    <the-header />
  </div>
  <!--  PORTADA -->
  <div class="portada">
    <div class="portada__text-container">
      <img src="@/assets/img/img01.png" />
      <p class="portada__subtitle">Acerca de mí</p>
      <p class="portada__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
    </div>
    <div class="portada__img-container">
      <img src="@/assets/img/img04.png" />
    </div>
  </div>

  <!--  BIOGRAFIA -->
  <div class="cifras" style="margin-bottom:15rem;">
    <div class="cifras__text-container">
      <p class="portada__subtitle">Biografía</p>
    </div>
    <div class="cifras__nav-container">
      <v-sheet class="">
        <v-slide-group class="">
          <v-slide-item class="empresas__nav-card" v-for="(itemBio, b) in biografia" :key="b">
            <p class="empresas__nav-text" v-html="itemBio.name" @click="setIdFiltro(itemBio.biographies_years)" />
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
    <div class="cifras__cards-container d-none d-md-block">
      <v-timeline align="start" direction="horizontal">
        <v-timeline-item dot-color="#6855F9" v-for="(year, i) in years" :key="i">
          <template v-slot:opposite>
            <div class="pt-1 headline font-weight-bold text-indigo-accent-4 timeline__fecha" v-text="year.year"></div>
          </template>
          <div>
            <div style="text-align: center">
              <p class="timeline__description">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                scaevola imperdiet nec ut, sed euismod convenire principes at.
                Est et nobis iisque percipit, an vim zril disputando
                voluptatibus, vix an salutandi sententiae.
              </p>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
    <div class="cifras__cards-container d-md-none">
      <v-timeline align="start">
        <v-timeline-item dot-color="#6855F9" v-for="(year, i) in biografiaSelect" :key="i">
          <template v-slot:opposite>
            <div class="pt-1 headline font-weight-bold text-indigo-accent-4 timeline__fecha" v-text="year.year"></div>
          </template>
          <div>
            <div style="text-align: center">
              <p class="timeline__description" v-html="year.biographies_events" />
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
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
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data: () => ({
    biografia: null,
    biografiaSelect: null
  }),

  methods: {
    async getBiografia() {
      let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/biografias/');
      this.biografia = response.data
    },
    async setIdFiltro(selectItem) {
      this.biografiaSelect = selectItem
    },
  },
  created() {
    this.getBiografia()
  },
};
</script>
