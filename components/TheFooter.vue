<template>
  <div class="bg-primary">
    <div class="py-10 lg:mx-[6rem] md:mx-[3rem] mx-[1rem] flex flex-col">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-10 lg:mb-0">
          <p class="text-2xl font-bold text-white mb-5">
            EXPERTO EN TRANSFORMACIÓN DIGITAL PARA INDUSTRIAS
          </p>
          <div class="flex items-center mb-5">
            <div>
              <p class="text-white font-semibold">Contáctame</p>
            </div>
          </div>
          <div class="mb-5">
            <div class="flex items-center mb-3">
              <img
                src="@/assets/img/icon/icon01.png"
                alt="Email Icon"
                class="mr-3"
              />
              <p class="text-white">{{ email }}</p>
            </div>
            <div class="flex items-center mb-3">
              <img
                src="@/assets/img/icon/icon02.png"
                alt="Address Icon"
                class="mr-3"
              />
              <p class="text-white">Dirección: {{ address }}</p>
            </div>
            <div class="flex items-center mb-5">
              <img
                src="@/assets/img/icon/icon03.png"
                alt="Social Icon"
                class="mr-3"
              />
              <p class="text-white">@jairmanrico</p>
            </div>
            <div class="flex space-x-4 mt-4 items-end">
              <a :href="linkedin" target="_blank">
                <img
                  src="@/assets/img/icon/socialIcons01.png"
                  alt="LinkedIn"
                  class="w-8"
                />
              </a>
              <a :href="youtube" target="_blank">
                <img
                  src="@/assets/img/icon/socialIcons02.png"
                  alt="YouTube"
                  class="w-8"
                />
              </a>
              <a :href="github" target="_blank">
                <img
                  src="@/assets/img/icon/socialIcons03.png"
                  alt="GitHub"
                  class="w-8"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p class="text-2xl font-bold text-white mb-5">Blogs</p>
          <div class="space-y-4">
            <div
              v-for="(blog, bg) in blogs"
              :key="bg"
              class="bg-[#6855F9] p-4 rounded-lg text-white flex space-x-4"
            >
              <div class="flex-shrink-0 self-center">
                <img
                  :src="blog.image"
                  class="w-24 h-24 object-cover rounded-lg"
                />
              </div>
              <div>
                <p class="text-lg font-semibold" v-html="blog.title"></p>
                <p class="text-sm mt-2" v-html="blog.short_description"></p>
                <p class="text-xs mt-2" v-html="blog.date"></p>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-6">
            <nuxt-link
              class="text-primary bg-white py-2 px-6 rounded-full text-lg font-semibold"
              to="/blogs"
            >
            Ver más
            </nuxt-link>
          </div>
        </div>
      </div>
      <div>
        <p class="text-white text-center mt-5">© {{ new Date().getFullYear() }} Divelia SAC.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "TheFooter",
    data: () => ({
      perfil: null,
      address: null,
      email: null,
      phone: null,
      linkedin: null,
      youtube: null,
      github: null,
      blogs: null,
    }),
    methods: {
      async getPerfil() {
        let response = await this.$api.get("/portafolio/perfil/");
        this.perfil = response.data;
        this.email = this.perfil.email;
        this.phone = this.perfil.phone;
        this.address = this.perfil.address;
        this.youtube = this.perfil.youtube;
        this.github = this.perfil.github;
        this.linkedin = this.perfil.linkedin;
      },

      async getBlogs() {
        let response = await this.$api.get("/portafolio/blogs/");
        this.blogs = response.data;
      },
    },
    mounted() {
      this.getPerfil();
      this.getBlogs();
    },
  };
</script>
