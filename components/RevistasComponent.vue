<template>
  <div class="flex flex-col items-center md:px-[3rem] px-[1rem] py-[3rem] border  border-[#dedede] rounded-[1.8rem] bg-white">
    <div class="text-center w-full">
      <p class="text-lg md:text-[2rem] text-[1.5rem] text-left font-[700] text-gray-700">Revistas y noticieros</p>
    </div>
    <div
      class="flex flex-wrap justify-evenly my-[3rem] w-full"
    >
      <div
        class="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-[220px] m-[1rem]"
        v-for="(revista, r) in revistas"
        :key="r"
      >
        <img :src="revista.image" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RevistasComponent",
    data: () => ({
      revistas: null,
    }),
    methods: {
      async getRevistas() {
        let response = await this.$api.get("/portafolio/revistas-noticieros/");
        this.revistas = response.data;
      },
    },
    mounted() {
      this.getRevistas();
    },
  };
</script>

<style scoped>
  img {
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }
</style>
