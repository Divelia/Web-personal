<template>
  <nav class="bg-white lg:shadow-none shadow-md shadow-gray-400">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-end lg:justify-center xl:justify-end mx-auto p-4"
    >
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg text-white bg-primary lg:hidden focus:outline-none focus:ring-2"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
        class="w-full lg:block lg:w-auto"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col lg:items-center p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0"
        >
          <li v-for="item in menuItems" :key="item.title">
            <nuxt-link
              class="block py-2 px-3 text-left lg:text-center my-link"
              :to="item.link"
            >
              {{ item.title }}
            </nuxt-link>
          </li>
          <li class="lg:mt-0 mt-5">
            <nuxt-link
              class="text-white bg-primary py-2 px-6 rounded-full text-lg font-semibold"
              to="/auth/login"
            >
              Iniciar Sesión
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "TheHeader",
    data() {
      return {
        isMenuOpen: false,
        menuItems: [
          { title: "Inicio", link: "/" },
          { title: "Acerca de mí", link: "/about" },
          { title: "Eventos", link: "/eventos" },
          { title: "Foro", link: "/foro" },
          { title: "Blogs", link: "/blogs" },
          { title: "Servicios Empresariales", link: "/servicios" },
        ],
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
</script>

<style scoped>
  .my-link.router-link-active {
    border-bottom-color: #6855f9 !important;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    font-family: Montserrat;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 800;
    color: #6855f9 !important;
  }

  .my-link {
    background-color: transparent;
    color: #34333f;
    font-family: Montserrat;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    text-decoration: none;
  }

  .my-link:hover {
    font-family: Montserrat;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1.25rem;
  }

  .my-link:active {
    color: #6855f9;
    font-family: Montserrat;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1.25rem;
  }
</style>
