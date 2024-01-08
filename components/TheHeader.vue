<template>
  <div class="d-flex">
    <v-row no-gutters>
      <v-col class="header">
        <nuxt-link to="/" class="my-link" > Inicio </nuxt-link>
        <nuxt-link to="/about" class="my-link"> Acerca de mí </nuxt-link>
        <nuxt-link to="/services/" class="my-link"> Servicios </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.my-link.router-link-active {
  border-bottom-color: #6855F9 !important;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  text-align: center;
  font-family: Montserrat;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 800;
  color: #6855F9 !important;
}

a {
  background-color: transparent;
  padding: 0.5rem 2rem;
  color: #34333F;
  text-align: center;
  font-family: Montserrat;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  text-decoration: none
}

a:hover {
  text-align: center;
  font-family: Montserrat;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.25rem;
}

a:active {
  color: #6855F9;
  text-align: center;
  font-family: Montserrat;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.25rem;
}

</style>