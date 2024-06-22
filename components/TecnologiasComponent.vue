<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col justify-center items-center gap-5">
      <p class="text-gray-800 md:text-[2rem] text-[1.5rem] font-[600]">Tecnologías</p>
      <p class="text-[#34333F] text-[1rem] font-[400] text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
    </div>
    <div class="flex flex-col bg-white">
      <div class="mb-6">
        <div class="flex space-x-4 mt-4 overflow-x-scroll">
          <button
            v-for="(tipo, index) in tipos"
            :key="index"
            :class="{
              'bg-indigo-500 text-white': tipo === tipoSeleccionado,
              'bg-white text-indigo-500 border-indigo-500 border':
                tipo !== tipoSeleccionado,
            }"
            class="py-2 px-4 rounded-xl transition-all duration-300"
            @click="filterByTipo(tipo)"
          >
            {{ tipo }}
          </button>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        <div
          class="bg-indigo-600 rounded-lg shadow-lg overflow-hidden"
          v-for="(tecnologia, n) in tecnologias"
          :key="n"
        >
          <div class="p-4">
            <p
              class="text-white text-xl font-semibold mb-2"
              v-html="tecnologia.name"
            />
            <img
              :src="tecnologia.image"
              alt="Tecnología Image"
              class="w-full h-auto"
              style="filter: grayscale(1)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TecnologiasComponent",
    data() {
      return {
        tecnologias: [],
        tipos: ["Back", "Front", "Nube"],
        tipoSeleccionado: "Back",
      };
    },
    methods: {
      filterByTipo(tipo) {
        this.tipoSeleccionado = tipo;
        // Aquí puedes realizar la lógica para filtrar según el tipo seleccionado
        if (tipo === "Empresas") {
          this.empresasFilter();
        } else if (tipo === "Reconocimientos y premios") {
          this.premiosFilter();
        }
        // Puedes agregar más condiciones según los tipos que tengas
      },
      empresasFilter() {
        // Lógica para filtrar por empresas
        console.log("Filtrando por Empresas");
      },
      premiosFilter() {
        // Lógica para filtrar por reconocimientos y premios
        console.log("Filtrando por Reconocimientos y premios");
      },
      async getTecnologias() {
        const response = await this.$api.get("/portafolio/tecnologias/");
        this.tecnologias = response.data;
      },
    },
    mounted() {
      this.getTecnologias();
    },
  };
</script>

<style scoped>
  .v-sheet {
    background: #6855f9 !important;
    border-radius: 3rem 0rem 0rem 3rem !important;
    display: flex !important;
    justify-content: space-around !important;
    padding: 2rem 0 !important;
  }
</style>
