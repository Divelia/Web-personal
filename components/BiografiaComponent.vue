<template>
  <div class="cifras" style="margin-bottom:15rem;">
    <div class="cifras__text-container">
      <p class="portada__subtitle">Biografía</p>
    </div>
    <div class="cifras__nav-container">
      <v-sheet class="mx-auto">
        <v-slide-group>
          <v-slide-group-item v-for="(itemBio, b) in biografia" :key="b" v-slot="{ isSelected, toggle }">
            <v-btn :class="isSelected ? 'empresas__nav-text-active' : 'empresas__nav-text'" style="padding: 0 2rem"
              rounded height="52px" @click="toggle" @click.capture="setIdFiltro(itemBio.biographies_years)">
              {{ itemBio.name }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
    <div class="d-none d-md-block" style="width: 100%;">
      <div class="cifras__cards-container">
        <v-timeline align="start" direction="horizontal">
          <v-timeline-item dot-color="#6855F9" v-for="(year, i) in biografiaSelect" :key="i">
            <template v-slot:opposite>
              <div class="pt-1 headline font-weight-bold text-indigo-accent-4 timeline__fecha" v-text="year.year"></div>
            </template>
            <div>
              <div style="text-align: center">
                <p class="timeline__description" v-for="(event, e) in year.biographies_events" :key="e">
                  {{ event.description }} </p>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>
    <div class="d-md-none" style="width: 100%;">
      <div class=" cifras__cards-container ">
        <v-timeline align="start">
          <v-timeline-item dot-color="#6855F9" v-for="(year, i) in biografiaSelect" :key="i">
            <template v-slot:opposite>
              <div class="pt-1 headline font-weight-bold text-indigo-accent-4 timeline__fecha" v-text="year.year"></div>
            </template>
            <div>
              <div style="text-align: center">
                <p class="timeline__description" v-for="(event, e) in year.biographies_events" :key="e"> {{
            event.description }} </p>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      biografia: [],
      biografiaSelect: [],
    };
  },

  methods: {
    async getBiografia() {
      try {
        const response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/biografias/');
        this.biografia = response.data;
        this.setIdFiltro(this.biografia[0].biographies_years)
      } catch (error) {
        console.error('Error al obtener la biografía:', error);
      }
    },
    async setIdFiltro(selectItem) {
      this.biografiaSelect = selectItem
    },
  },
  mounted() {
    this.getBiografia()
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