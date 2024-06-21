<template>
    <div class="cifras">
        <div class="cifras__text-container">
            <p class="portada__subtitle">Cifras</p>
        </div>
        <div class="cifras__cards-container">
            <v-card class="cifras__card" v-for="(estadistica, est) in estadisticas" :key="est">
                <p class="cifras__card-num" v-html="estadistica.number" />
                <p class="cifras__card-title" v-html="estadistica.name" />
            </v-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CifrasComponent',
    data: () => ({
        estadisticas: null,
    }),
    methods: {
        async getEstadisticas() {
            let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/estadisticas/');
            this.estadisticas = response.data
        },
    },
    mounted() {
        this.getEstadisticas()
    },
}
</script>