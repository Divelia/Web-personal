<template>
    <div class="portada">
        <div class="portada__text-container">
            <p class="portada__subtitle">Empresas fundadas</p>
            <div class="empresas__container-nav">
                <v-sheet class="mx-auto">
                    <v-slide-group>
                        <v-slide-group-item>
                            <v-btn :class="isActive ? 'empresas__nav-text-active' : 'empresas__nav-text'" height="52px"
                                rounded="xl" style="padding: 0 2rem" @click="empresasFilter">
                                Empresas
                            </v-btn>
                        </v-slide-group-item>
                        <v-slide-group-item>
                            <v-btn :class="isActive1 ? 'empresas__nav-text-active' : 'empresas__nav-text'" height="52px"
                                rounded="xl" style="padding: 0 2rem" @click="premiosFilter">
                                Reconocimientos y premios
                            </v-btn>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </div>
            <div class="empresas__container-cards">
                <v-card class="empresas__card" v-for="(dataInd, di) in dataFiltro" :key="di">
                    <img :src="dataInd.image" />
                </v-card>
            </div>
        </div>
        <div class="portada__img-container">
            <img src="@/assets/img/img08.png" />
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'EmpresasComponent',
    data: () => ({
        isActive: true,
        isActive1: false,
        dataFiltro: '',
        empresas: null,
        premios: null,
    }),
    methods: {
        async getEmpresas() {
            let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/empresas-fundadas/');
            this.empresas = response.data
            this.dataFiltro = this.empresas
        },
        empresasFilter() {
            this.dataFiltro = this.empresas,
                this.isActive = true,
                this.isActive1 = false
        },
        async getPremios() {
            let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/reconocimientos-premios/');
            this.premios = response.data
        },
        premiosFilter() {
            this.dataFiltro = this.premios,
                this.isActive = false,
                this.isActive1 = true
        },
    },
    mounted() {
        this.getEmpresas()
        this.getPremios()
    },
}
</script>

<style scoped>
.v-btn {
    text-transform: none !important;
    border-radius: 1.875rem;
    border: 1px solid var(--div-100, #6855F9);
}
</style>