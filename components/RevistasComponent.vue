<template>
    <div class="revista">
        <div class="revista__text-container">
            <p class="portada__subtitle">Revistas y noticieros</p>
        </div>
        <div class="revista__cards-container">
            <v-card class="revista__card" v-for="(revista, r) in revistas" :key="r">
                <img :src="revista.image" />
            </v-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'RevistasComponent',
    data: () => ({
        revistas: null,
    }),
    methods: {
        async getRevistas() {
            let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/revistas-noticieros/');
            this.revistas = response.data
        }
    },
    mounted() {
        this.getRevistas()
    },
}
</script>