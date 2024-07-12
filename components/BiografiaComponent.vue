<template>
  <div
    class="flex flex-col py-[2rem] px-[1rem] md:px-[3rem] border border-gray-300 rounded-lg shadow-lg gap-10"
  >
    <div class="w-full">
      <p class="text-gray-800 text-2xl md:text-3xl font-semibold">Biografía</p>
    </div>
    <div class="w-full">
      <div class="flex space-x-4 overflow-x-scroll">
        <button
          v-for="(itemBio, b) in biografia"
          :key="b"
          @click="setIdFiltro(itemBio.biographies_years)"
          :class="[
            'py-2 px-4 rounded-xl transition-all duration-300',
            isActive(itemBio.biographies_years)
              ? 'bg-indigo-500 text-white'
              : 'bg-white text-indigo-500 border-indigo-500 border',
          ]"
        >
          {{ itemBio.name }}
        </button>
      </div>
    </div>
    <div class="w-full flex gap-5">
      <div class="w-full lg:w-1/2 overflow-y-auto h-[80vh]">
        <ol class="relative border-l border-gray-400 pl-6">
          <li v-for="(year, i) in biografiaSelect" :key="i" class="mb-10">
            <div
              class="absolute w-5 h-5 bg-primary rounded-full mt-1.5 -left-2.5 border border-white"
            ></div>
            <time
              class="mb-1 text-[1.5rem] font-[700] leading-none text-primary"
            >
              {{ year.year }}
            </time>
            <div class="relative w-full overflow-hidden">
              <div
                class="flex space-x-4 transition-transform duration-300 ease-in-out"
                :style="{
                  transform: `translateX(-${activeIndex * slideWidth}px)`,
                }"
              >
                <div
                  v-for="(event, index) in year.biographies_events"
                  :key="index"
                  class="flex-shrink-0 w-full overflow-hidden"
                >
                  <div class="p-4">
                    <h3 class="text-lg font-semibold text-gray-900">
                      {{ event.day }} - {{ event.month }}
                    </h3>
                    <p class="mt-2 text-base text-gray-700 w-full">
                      {{ event.description }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center gap-5"
                v-if="year.biographies_events.length > 1"
              >
                <button
                  class="p-2 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out hover:bg-gray-30 focus:outline-none"
                  :disabled="activeIndex === 0"
                  @click="prevSlide"
                >
                  <svg
                    class="w-4 h-4 text-black transform scale-x-[-1]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.707 4.293a1 1 0 0 0-1.414 1.414L12.586 10l-3.293 3.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-0.707-0.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  class="p-2 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out hover:bg-gray-300 focus:outline-none"
                  :disabled="activeIndex === year.biographies_events.length - 1"
                  @click="nextSlide"
                >
                  <svg
                    class="w-4 h-4 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.707 4.293a1 1 0 0 0-1.414 1.414L12.586 10l-3.293 3.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-0.707-0.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="p-4">
              <button
                @click="openModal(year.biographies_media)"
                class="block lg:hidden bg-indigo-500 text-white rounded-xl py-2 px-6 transition duration-300 hover:bg-indigo-600 focus:outline-none"
              >
                Ver Fotos
              </button>
              <button
                @click="selectImages(year.biographies_media)"
                class="hidden lg:block bg-indigo-500 text-white rounded-xl py-2 px-6 transition duration-300 hover:bg-indigo-600 focus:outline-none"
              >
                Ver Fotos
              </button>
            </div>
          </li>
        </ol>
      </div>
      <div class="hidden lg:block lg:w-1/2 p-4 self-center">
        <Carousel :images="images" />
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    v-if="dialog"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50"
    @click.self="dialog = false"
  >
    <div class="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg mx-5">
      <div class="text-center">
        <h3 class="text-2xl font-semibold text-gray-800">Fotos y Videos</h3>
      </div>
      <div class="mt-4">
        <Carousel :images="images" />
      </div>
      <div class="mt-6 flex justify-end">
        <button
          @click="dialog = false"
          class="bg-gray-300 text-gray-700 rounded-lg py-2 px-4 transition duration-300 hover:bg-gray-400 focus:outline-none"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Carousel from "@/components/Carousel.vue";
  export default {
    components: {
      Carousel,
    },
    data() {
      return {
        biografia: [],
        biografiaSelect: [],
        dialog: false,
        selectedMedia: [],
        images: [
          "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1.jpg",
          "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1.jpg",
          "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1.jpg",
          "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1.jpg",
          "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1.jpg",
        ],
      };
    },

    methods: {
      async getBiografia() {
        try {
          const response = await this.$api.get("/portafolio/biografias/");
          this.biografia = response.data;
          this.setIdFiltro(this.biografia[0].biographies_years);
        } catch (error) {
          console.error("Error al obtener la biografía:", error);
        }
      },

      setIdFiltro(selectItem) {
        this.biografiaSelect = selectItem;
        console.log(this.biografiaSelect);
      },

      isActive(years) {
        return this.biografiaSelect === years;
      },

      openModal(media) {
        this.selectImages(media);
        this.dialog = true;
      },

      selectImages(media) {
        this.selectedMedia = media;
      },
    },

    mounted() {
      this.getBiografia();
    },
  };
</script>

<style scoped>
  /* Estilos opcionales específicos para el componente */
</style>
