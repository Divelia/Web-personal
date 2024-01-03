<template>
  <div style="background: #1d48ff; margin-top: -9rem;">
    <div class="footer">
      <div class="footer__information-container">
        <p class="footer__title">
          EXPERTO EN TRANSFORMACIÓN DIGITAL PARA INDUSTRIAS
        </p>
        <div class="footer__contacto">
          <div class="d-flex my-5">
            <div class="footer__img-container">
            </div>
            <div class="footer__text-container">
              <p class="footer__text">Contáctame</p>
            </div>
          </div>
          <div class="d-flex">
            <div class="footer__img-container">
              <img src="@/assets/img/img12.png" />
            </div>
            <div class="footer__text-container"
            >
              <div class="footer__row-container">
                <div>
                  <img src="@/assets/img/icon/icon01.png" />
                </div>
                <div class="mx-3">
                  <p class="footer__description"> perfil.email </p>
                </div>
              </div>
              <div class="footer__row-container">
                <div>
                  <img src="@/assets/img/icon/icon02.png" />
                </div>
                <div class="mx-3">
                  <p class="footer__description">
                    Dirección: Calle Ortiz de Zevallos 151, Miraflores
                  </p>
                </div>
              </div>
              <div class="footer__row-container">
                <div>
                  <img src="@/assets/img/icon/icon03.png" />
                </div>
                <div class="mx-3">
                  <p class="footer__description">@jairmanrico</p>
                </div>
              </div>
              <div class="d-flex" style="align-items: center">
                <div class="ma-0 pa-0" cols="12">
                  <v-btn rounded="xl" variant="text">
                    <img src="@/assets/img/icon/socialIcons01.png" />
                  </v-btn>
                  <v-btn rounded="xl" variant="text">
                    <img src="@/assets/img/icon/socialIcons02.png" />
                  </v-btn>
                  <v-btn rounded="xl" variant="text">
                    <img src="@/assets/img/icon/socialIcons03.png" />
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div class="footer__img-container">
            </div>
            <div>
              <p class="footer__description my-10">©  {{ new Date().getFullYear() }} Divelia SAC. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__information-container">
        <p class="footer__text">Blogs</p>
        <div class="footer__blog">
          <v-card color="#1D48FF" theme="dark" class="d-flex blog" v-for="(blog, bg) in 2" :key="bg">
            <div class="blog__img">
              <img src="@/assets/img/img09.png" style="width:7.5rem;" />
            </div>
            <div class="blog__content">
              <p class="blog__title">Halcyon Days</p>
              <p class="blog__description my-4">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis.</p>
              <p class="blog__fecha">Marzo 15, 2019</p>
            </div>
          </v-card>
        </div>
        <div class="d-flex" style="justify-content: center;">
          <v-btn class="text-indigo-accent-4 text-subtitle-1" height="35px" rounded="xl" color="#FFF"
            style="padding: 0 3rem">
            Ver más
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    perfil:null,
    direccion:null,
    email:null,
    celular:null,
    linkedin:null,
    youtube:null
  }),
  methods: {
    async getPerfil() {
      let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/perfil/');
      this.perfil = response.data
    }
  },
  created() {
    this.getPerfil()
  },
};
</script>