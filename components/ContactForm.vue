<template>
  <div
    class="flex flex-col items-center py-[3rem] px-[2rem] md:px-[4rem] w-full bg-primary rounded-[1.8rem]"
  >
    <div
      class="flex flex-col lg:flex-row justify-between lg:items-center w-full"
    >
      <div
        class="grid justify-center items-center lg:mb-0 mb-10 text-center lg:w-[30%]"
      >
        <img src="@/assets/img/img15.png" class="mx-auto" />
      </div>
      <form
        @submit.prevent="submitForm"
        ref="form"
        class="space-y-8 lg:w-[60%]"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label class="block text-sm font-medium text-white">Nombre</label>
            <input
              type="text"
              v-model="nombre"
              :class="[
                'form-input mt-1 block w-full rounded-md shadow-sm',
                { 'border border-red-500': errors.nombre },
              ]"
              :placeholder="'Nombre'"
            />
            <p
              v-if="errors.nombre"
              class="text-red-500 text-xs mt-1 font-[700]"
            >
              {{ errors.nombre }}
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-white">Apellido</label>
            <input
              type="text"
              v-model="apellido"
              :class="[
                'form-input mt-1 block w-full rounded-md shadow-sm',
                { 'border border-red-500': errors.apellido },
              ]"
              :placeholder="'Apellido'"
            />
            <p
              v-if="errors.apellido"
              class="text-red-500 text-xs mt-1 font-[700]"
            >
              {{ errors.apellido }}
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-white">E-mail</label>
            <input
              type="text"
              v-model="email"
              :class="[
                'form-input mt-1 block w-full rounded-md shadow-sm',
                { 'border border-red-500': errors.email },
              ]"
              :placeholder="'E-mail'"
            />
            <p v-if="errors.email" class="text-red-500 text-xs mt-1 font-[700]">
              {{ errors.email }}
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-white">Celular</label>
            <input
              type="text"
              v-model="celular"
              :class="[
                'form-input mt-1 block w-full rounded-md shadow-sm',
                { 'border border-red-500': errors.celular },
              ]"
              :placeholder="'Celular'"
            />
            <p
              v-if="errors.celular"
              class="text-red-500 text-xs mt-1 font-[700]"
            >
              {{ errors.celular }}
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-white">Ciudad</label>
            <input
              type="text"
              v-model="ciudad"
              :class="[
                'form-input mt-1 block w-full rounded-md shadow-sm',
                { 'border border-red-500': errors.ciudad },
              ]"
              :placeholder="'Ciudad'"
            />
            <p
              v-if="errors.ciudad"
              class="text-red-500 text-xs mt-1 font-[700]"
            >
              {{ errors.ciudad }}
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-white">Servicio</label>
            <input
              type="text"
              v-model="servicio"
              :class="[
                'form-input mt-1 block w-full rounded-md shadow-sm',
                { 'border border-red-500': errors.serivico },
                ,
              ]"
              :placeholder="'Servicio'"
            />
            <p
              v-if="errors.servicio"
              class="text-red-500 text-xs mt-1 font-[700]"
            >
              {{ errors.servicio }}
            </p>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-white">Mensaje</label>
          <textarea
            v-model="mensaje"
            :class="[
              'form-textarea mt-1 block w-full rounded-md shadow-sm',
              { 'border border-red-500': errors.mensaje },
            ]"
            :placeholder="'Mensaje'"
          ></textarea>
          <p v-if="errors.mensaje" class="text-red-500 text-xs mt-1 font-[700]">
            {{ errors.mensaje }}
          </p>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="px-6 py-3 mt-2 w-full rounded-full text-primary bg-white shadow shadow-gray-800 hover:bg-gray-200"
            :disabled="loading"
          >
            <span v-if="!loading">Comencemos</span>
            <span v-else class="flex items-center justify-center">
              <svg
                class="w-5 h-5 mr-2 text-primary animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 20a8 8 0 010-16V0c6.627 0 12 5.373 12 12h-4a8 8 0 01-8 8z"
                ></path>
              </svg>
              Enviando...
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: () => ({
      nombre: "",
      apellido: "",
      email: "",
      celular: "",
      ciudad: "",
      servicio: "",
      mensaje: "",
      loading: false,
      errors: {},
    }),
    methods: {
      validateForm() {
        this.errors = {};

        if (!this.nombre) this.errors.nombre = "Este campo es requerido.";
        if (!this.apellido) this.errors.apellido = "Este campo es requerido.";
        if (!this.email) {
          this.errors.email = "Este campo es requerido.";
        } else if (
          !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.email)
        ) {
          this.errors.email = "E-mail no válido.";
        }
        if (!this.celular) {
          this.errors.celular = "Este campo es requerido.";
        } else if (!/^[0-9]{10}$/.test(this.celular)) {
          this.errors.celular = "Número de celular no válido.";
        }
        if (!this.ciudad) this.errors.ciudad = "Este campo es requerido.";
        if (!this.servicio) this.errors.servicio = "Este campo es requerido.";
        if (!this.mensaje) this.errors.mensaje = "Este campo es requerido.";

        return Object.keys(this.errors).length === 0;
      },
      async submitForm() {
        if (this.validateForm()) {
          this.loading = true;
          const fullName = `${this.nombre} ${this.apellido}`;
          try {
            await axios.post("https://tu-backend.com/api/send-email", {
              full_name: fullName,
              email: this.email,
              phone: this.celular,
              city: this.ciudad,
              service: this.servicio,
              message: this.mensaje,
            });
            alert("Formulario enviado exitosamente.");
          } catch (error) {
            console.error("Error al enviar el formulario:", error);
          } finally {
            this.loading = false;
            this.resetForm();
          }
        }
      },
      resetForm() {
        this.nombre = "";
        this.apellido = "";
        this.email = "";
        this.celular = "";
        this.ciudad = "";
        this.servicio = "";
        this.mensaje = "";
      },
    },
  };
</script>

<style scoped>
  .form-input,
  .form-textarea {
    padding: 0.5rem;
  }

  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
  }
</style>
