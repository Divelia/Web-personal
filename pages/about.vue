<template>
  <NuxtLayout :name="layout">
    <div class="flex flex-col gap-[5rem]">
      <div class="flex lg:flex-row flex-col items-center gap-[3rem]">
        <div class="w-full lg:mr-[5rem]">
          <p
            class="text-gray-800 md:text-[2rem] text-[1.5rem] font-[600] leading-[4.3rem] mb-[1rem]"
          >
            {{ title }}
          </p>
          <p
            class="text-[#34333F] text-[1rem] font-[400] text-justify leading-[35px]"
          >
            {{ description }}
          </p>
        </div>
        <div class="w-[80%]">
          <img :src="imageP" />
        </div>
      </div>

      <div>
        <cifras-component />
      </div>

      <div>
        <biografia-component />
      </div>

      <div>
        <tecnologias-component />
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
  import CifrasComponent from "@/components/CifrasComponent.vue";
  import BiografiaComponent from "@/components/BiografiaComponent.vue";
  import TecnologiasComponent from "@/components/TecnologiasComponent.vue";
  export default {
    components: {
      CifrasComponent,
      BiografiaComponent,
      TecnologiasComponent,
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
          const response = await this.$api.get("/portafolio/landing/about/");
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
