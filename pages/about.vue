<template>
  <NuxtLayout :name="layout">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </NuxtLayout>
</template>

<script>
  export default {
    data() {
      return {
        layout: "landing",
      };
    },
  };
</script>
