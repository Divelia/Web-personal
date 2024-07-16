<template>
  <div class="flex flex-col py-[2rem] px-[3rem] border boder-[#dedede] rounded-[1.8rem] shadow-lg">
    <div>
      <p class="text-gray-700 text-[2rem] font-[700]">Cifras</p>
    </div>
    <div
      class="flex flex-wrap justify-center w-full"
    >
      <div
        class="py-[1rem] px-[2rem] w-full md:w-[50%] lg:w-[25%]"
        v-for="(estadistica, est) in estadisticas"
        :key="est"
      >
        <p
          class=" text-primary text-[3.75rem] font-[700] text-center"
          v-html="estadistica.number"
        />
        <p
          class="text-[1rem] font-[500] text-gray-700 text-center leading-[1.5rem]"
          v-html="estadistica.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CifrasComponent",
    data: () => ({
      estadisticas: null,
    }),
    methods: {
      async getEstadisticas() {
        let response = await this.$api.get("/portafolio/estadisticas/");
        this.estadisticas = response.data;
      },
    },
    mounted() {
      this.getEstadisticas();
    },
  };
</script>
