<template>
  <NuxtLayout :name="layout">
    <div class="flex justify-center items-center bg-gray-100 py-[5rem]">
      <div
        class="bg-white shadow-md rounded-lg overflow-hidden md:w-3/4 w-[90%] p-6"
      >
        <form @submit.prevent="register" class="w-full">
          <h2 class="text-2xl font-semibold text-center mb-6">Registro</h2>
          <div class="flex flex-col justify-center items-center mb-6">
            <div class="relative borde">
              <input
                type="file"
                @change="previewImage"
                class="hidden"
                ref="fileInput"
                accept="image/*"
              />
              <img
                :src="imagePreview || '../assets/img/default-profile.jpg'"
                @click="selectImage"
                class="w-32 h-32 rounded-full object-cover cursor-pointer border border-black"
                alt="Profile Picture"
              />
              <button
                type="button"
                @click="selectImage"
                class="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>
            <button
              v-if="imagePreview"
              @click="removeImage"
              class="mt-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Eliminar Imagen
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="mb-4">
              <label
                for="nombres"
                class="block text-sm font-medium text-gray-700"
                >Nombres</label
              >
              <input
                v-model="nombres"
                type="text"
                id="nombres"
                name="nombres"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="apellidos"
                class="block text-sm font-medium text-gray-700"
                >Apellidos</label
              >
              <input
                v-model="apellidos"
                type="text"
                id="apellidos"
                name="apellidos"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="tipoDocumento"
                class="block text-sm font-medium text-gray-700"
                >Tipo de Documento de Identidad</label
              >
              <select
                v-model="tipoDocumento"
                id="tipoDocumento"
                name="tipoDocumento"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              >
                <option value="">Selecciona un tipo de documento</option>
                <option
                  v-for="tipo in tiposDocumento"
                  :key="tipo"
                  :value="tipo"
                >
                  {{ tipo }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <label
                for="numeroDocumento"
                class="block text-sm font-medium text-gray-700"
                >Número de Documento de Identidad</label
              >
              <input
                v-model="numeroDocumento"
                type="text"
                id="numeroDocumento"
                name="numeroDocumento"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="region"
                class="block text-sm font-medium text-gray-700"
                >Región</label
              >
              <select
                v-model="region"
                id="region"
                name="region"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              >
                <option value="">Selecciona una región</option>
                <option v-for="reg in regiones" :key="reg" :value="reg">
                  {{ reg }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <label
                for="provincia"
                class="block text-sm font-medium text-gray-700"
                >Provincia</label
              >
              <select
                v-model="provincia"
                id="provincia"
                name="provincia"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              >
                <option value="">Selecciona una provincia</option>
                <option v-for="prov in provincias" :key="prov" :value="prov">
                  {{ prov }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <label
                for="distrito"
                class="block text-sm font-medium text-gray-700"
                >Distrito</label
              >
              <select
                v-model="distrito"
                id="distrito"
                name="distrito"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              >
                <option value="">Selecciona un distrito</option>
                <option v-for="dist in distritos" :key="dist" :value="dist">
                  {{ dist }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <label
                for="celular"
                class="block text-sm font-medium text-gray-700"
                >Celular</label
              >
              <input
                v-model="celular"
                type="tel"
                id="celular"
                name="celular"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="correo"
                class="block text-sm font-medium text-gray-700"
                >Correo</label
              >
              <input
                v-model="correo"
                type="email"
                id="correo"
                name="correo"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              />
            </div>
            <div class="mb-4 md:col-span-2">
              <label
                for="presentacion"
                class="block text-sm font-medium text-gray-700"
                >Presentación</label
              >
              <textarea
                v-model="presentacion"
                id="presentacion"
                name="presentacion"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 mt-4"
          >
            Registrarse
          </button>

          <p class="mt-4 text-sm text-center text-gray-600">
            ¿Ya tienes una cuenta?
            <nuxt-link class="text-primary focus:outline-none" to="/auth/login">
              Iniciar Sesión
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
        nombres: "",
        apellidos: "",
        tipoDocumento: "",
        numeroDocumento: "",
        region: "",
        provincia: "",
        distrito: "",
        celular: "",
        correo: "",
        foto: null,
        presentacion: "",
        tiposDocumento: ["DNI", "Pasaporte", "Carnet de Extranjería"],
        regiones: ["Región 1", "Región 2", "Región 3"],
        provincias: ["Provincia 1", "Provincia 2", "Provincia 3"],
        distritos: ["Distrito 1", "Distrito 2", "Distrito 3"],
        imagePreview: null,
      };
    },
    methods: {
      async register() {
        try {
          // Lógica para enviar datos de registro
          const formData = new FormData();
          formData.append("nombres", this.nombres);
          formData.append("apellidos", this.apellidos);
          formData.append("tipoDocumento", this.tipoDocumento);
          formData.append("numeroDocumento", this.numeroDocumento);
          formData.append("region", this.region);
          formData.append("provincia", this.provincia);
          formData.append("distrito", this.distrito);
          formData.append("celular", this.celular);
          formData.append("correo", this.correo);
          formData.append("presentacion", this.presentacion);
          if (this.foto) {
            formData.append("foto", this.foto);
          }

          console.log("Registro:", Object.fromEntries(formData));
          // Enviar formData al backend
        } catch (error) {
          console.error("Error en registro:", error);
        }
      },
      selectImage() {
        this.$refs.fileInput.click();
      },
      previewImage(event) {
        const file = event.target.files[0];
        if (file) {
          this.foto = file;
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imagePreview = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      removeImage() {
        this.imagePreview = null;
        this.foto = null;
        this.$refs.fileInput.value = null;
      },
    },
  };
</script>

<style scoped>
  .bg-primary {
    background-color: #6855f9;
  }
</style>
