<template>
  <div class="flex flex-col h-[100%] min-h-screen">
    <the-header />
    <div
      class="flex-grow flex flex-col gap-20"
    >
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
