<template>
  <div class="flex flex-col gap-5 bg-white">
    <div class="flex flex-col gap-5">
      <p class="text-lg md:text-[2rem] text-[1.5rem] font-semibold items-start text-gray-800">
        Empresas fundadas
      </p>
      <div class="flex space-x-4 mt-4">
        <button
          :class="
            isActive
              ? 'bg-indigo-500 text-white'
              : 'bg-white text-indigo-500 border-indigo-500 border'
          "
          class="py-2 px-4 rounded-xl transition-all duration-300"
          @click="empresasFilter"
        >
          Empresas
        </button>
        <button
          :class="
            isActive1
              ? 'bg-indigo-500 text-white'
              : 'bg-white text-indigo-500 border-indigo-500 border'
          "
          class="py-2 px-4 rounded-xl transition-all duration-300"
          @click="premiosFilter"
        >
          Reconocimientos y premios
        </button>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
    >
      <div
        class="bg-white shadow-lg rounded-lg overflow-hidden"
        v-for="(dataInd, di) in dataFiltro"
        :key="di"
      >
        <img :src="dataInd.image" class="w-full h-48 object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EmpresasComponent",
    data() {
      return {
        isActive: true,
        isActive1: false,
        dataFiltro: "",
        empresas: null,
        premios: null,
      };
    },
    methods: {
      async getEmpresas() {
        let response = await this.$api.get("/portafolio/empresas-fundadas/");
        this.empresas = response.data;
        this.dataFiltro = this.empresas;
      },
      empresasFilter() {
        this.dataFiltro = this.empresas;
        this.isActive = true;
        this.isActive1 = false;
      },
      async getPremios() {
        let response = await this.$api.get(
          "/portafolio/reconocimientos-premios/"
        );
        this.premios = response.data;
      },
      premiosFilter() {
        this.dataFiltro = this.premios;
        this.isActive = false;
        this.isActive1 = true;
      },
    },
    mounted() {
      this.getEmpresas();
      this.getPremios();
    },
  };
</script>

<style scoped>
  button {
    outline: none;
  }
</style>
