<template>
    <div class="tecnologias">
        <div class="tecnologias__text-container">
            <p class="portada__subtitle">Tecnologías</p>
            <p class="portada__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
        </div>
        <div class="tecnologias__cards-container">
            <v-sheet class="mx-auto">
                <v-slide-group>
                    <v-slide-group-item v-for="(tecnologia, n) in tecnologias" :key="n">
                        <v-card color="#6855F9" class="mx-6 my-4 tecnologias__cards" height="215" width="220">
                            <p class="tecnologias__title" v-html="tecnologia.name" />
                            <img :src="tecnologia.image" class="tecnologias__image" style="filter: grayscale(1)" />
                        </v-card>
                    </v-slide-group-item>
                </v-slide-group>
            </v-sheet>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'TecnologiasComponent',
    data() {
        return {
            tecnologias: []
        };
    },
    methods: {
        async getTecnologias() {
            const response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/tecnologias/');
            this.tecnologias = response.data
        },
    },
    mounted() {
        this.getTecnologias()
    },
}
</script>

<style scoped>
.v-sheet {
    background: #6855F9 !important;
    border-radius: 3rem 0rem 0rem 3rem !important;
    display: flex !important;
    justify-content: space-around !important;
    padding: 2rem 0 !important;
}
</style>