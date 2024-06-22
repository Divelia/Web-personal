<template>
  <div class="flex flex-col gap-20 h-[100%] min-h-screen">
    <the-header />
    <div class="flex-grow flex flex-col gap-20 items-center lg:mx-[5rem] md:mx-[3rem] mx-[1rem]">
      <slot />
    </div>
    <the-footer />
  </div>
</template>

<script>
  import TheHeader from "@/components/TheHeader.vue";
  import TheFooter from "@/components/TheFooter.vue";
  export default {
    components: {
      TheHeader,
      TheFooter,
    },
  };
</script>
