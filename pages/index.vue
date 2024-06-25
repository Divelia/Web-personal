<template>
  <NuxtLayout :name="layout">
    <div
      v-if="loading"
      class="flex items-center justify-center bg-opacity-50"
    >
      <svg
        class="animate-spin h-8 w-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0c-6.627 0-12 5.373-12 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.411 3.589 8 8 8v-2.709z"
        ></path>
      </svg>
    </div>
    <div v-else class="flex flex-col gap-[5rem]">
      <div class="flex lg:flex-row flex-col items-center gap-[3rem]">
        <div class="w-full lg:mr-[5rem]">
          <p
            class="text-[#1EF0C3] text-[2.5rem] font-[600] leading-[2rem] mb-[2rem]"
          >
            Jair Manrique
          </p>
          <p
            class="text-primary text-[38px] lg:text-[3.2rem] font-[600] leading-[4.3rem] mb-[3rem]"
          >
            {{ title }}
            <!-- <br/><span style="color: #34333f">transformación digital</span> <br />para industrias}} -->
          </p>
          <p
            class="text-[#34333F] text-[1rem] font-[400] text-justify leading-[35px] mb-[3rem]"
          >
            {{ description }}
          </p>
          <nuxt-link
            class="text-white bg-primary py-2 px-6 rounded-full text-lg font-semibold"
            to="/about"
          >
            Ver biografía
          </nuxt-link>
        </div>
        <div class="w-[80%]">
          <img :src="imageP" />
        </div>
      </div>
      <div>
        <empresas-component />
      </div>
      <div>
        <revistas-component />
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
  import EmpresasComponent from "@/components/EmpresasComponent.vue";
  import RevistasComponent from "@/components/RevistasComponent.vue";
  export default {
    components: {
      EmpresasComponent,
      RevistasComponent,
    },
    data() {
      return {
        portada: [],
        title: null,
        imageP: null,
        description: null,
        layout: "landing",
        loading: true,
      };
    },
    methods: {
      async getPortada() {
        try {
          const response = await this.$api.get("/portafolio/landing/home/");
          console.log(response.data);
          this.portada = response.data;
          this.title = this.portada.title;
          this.imageP = this.portada.image;
          this.description = this.portada.description;
        } catch (error) {
          console.error("Error al obtener la información:", error);
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {
      this.getPortada();
    },
  };
</script>
