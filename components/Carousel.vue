<template>
  <div class="relative w-full overflow-hidden">
    <div
      class="carousel-inner flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="flex-shrink-0 w-full"
      >
        <img
          :src="image"
          alt="Carousel Image"
          class="w-full h-auto object-cover"
        />
      </div>
    </div>
    <button
      class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      @click="prevImage"
    >
      &#10094;
    </button>
    <button
      class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      @click="nextImage"
    >
      &#10095;
    </button>
    <div
      class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <button
        v-for="(image, index) in images"
        :key="index"
        class="w-3 h-3 rounded-full"
        :class="{
          'bg-indigo-500': activeIndex === index,
          'bg-gray-300': activeIndex !== index,
        }"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        activeIndex: 0,
      };
    },
    methods: {
      prevImage() {
        this.activeIndex =
          (this.activeIndex - 1 + this.images.length) % this.images.length;
      },
      nextImage() {
        this.activeIndex = (this.activeIndex + 1) % this.images.length;
      },
      goToSlide(index) {
        this.activeIndex = index;
      },
      getSlideClasses(index) {
        return {
          "flex-shrink-0 w-full": true,
        };
      },
    },
  };
</script>

<style scoped>
  .carousel-image {
    transition: transform 0.5s ease;
  }
</style>
