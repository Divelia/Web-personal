<template>
  <NuxtLayout :name="layout">
    <div class="flex justify-center items-center bg-gray-100 py-[5rem]">
      <div
        class="bg-white shadow-md rounded-lg md:w-96 w-[80%]"
      >
        <form @submit.prevent="login" class="px-6 py-8 w-full">
          <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>
          <div class="mb-4">
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
              >Username</label
            >
            <input
              v-model="username"
              type="text"
              id="username"
              name="username"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Login
          </button>
          <p class="mt-4 text-sm text-center text-gray-600">
            ¿No tienes cuenta?
            <nuxt-link
              class="text-primary focus:outline-none"
              to="/auth/register"
            >
              Registrarse
            </nuxt-link>
          </p>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
  export default {
    data() {
      return {
        layout: "auth",
        username: "",
        password: "",
      };
    },
    methods: {
      async login() {
        try {
          // Lógica para enviar datos de login
          console.log("Login");
        } catch (error) {
          console.error("Error en login:", error);
        }
      },
    },
  };
</script>
