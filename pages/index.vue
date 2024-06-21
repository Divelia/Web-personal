<template>
  <NuxtLayout :name="layout">
    <div class="flex lg:flex-row flex-col items-center">
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
  </NuxtLayout>
</template>
<script>
  import CifrasComponent from "../components/CifrasComponent.vue";
  import TecnologiasComponent from "../components/TecnologiasComponent.vue";
  import EmpresasComponent from "../components/EmpresasComponent.vue";
  import ServiciosComponent from "../components/ServiciosComponent.vue";
  import RevistasComponent from "../components/RevistasComponent.vue";
  export default {
    components: {
      CifrasComponent,
      TecnologiasComponent,
      EmpresasComponent,
      ServiciosComponent,
      RevistasComponent,
    },
    data() {
      return {
        portada: [],
        title: null,
        imageP: null,
        description: null,
        layout: "landing",
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
        }
      },
    },
    mounted() {
      this.getPortada();
    },
  };
</script>
