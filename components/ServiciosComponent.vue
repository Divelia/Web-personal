<template>
    <div>

        <div class="tecnologias">
            <div class="tecnologias__text-container">
                <p class="portada__subtitle">Servicios</p>
            </div>
        </div>
        <div style="background: #6855F9">
            <div class="servicios">
                <div class="servicios__text-container">
                    <img src="@/assets/img/img09.png" />
                </div>
                <div class="servicios__cards-container">
                    <v-sheet>
                        <v-slide-group v-model="model">
                            <v-slide-group-item v-for="(item, i) in servicios" :key="i">
                                <v-hover v-slot="{ isHovering, props }">
                                    <v-card class="servicios__card" v-bind="props">
                                        <v-card-text class="servicios__cardContainer">
                                            <img class="servicios__image" :src="item.image" />
                                            <p class="servicios__title" v-html="item.name" />
                                        </v-card-text>
                                        <v-expand-transition>
                                            <v-card v-if="isHovering" class="v-card--reveal pa-2" style="height: 100%;">
                                                <v-card-text class="pa-1">
                                                    <p class="servicios__title" v-html="item.name" />
                                                    <p class="servicios__description" v-html="item.short_description" />
                                                    <nuxt-link :to="`/servicios/${item.slug}/`"
                                                        class="empresas__nav-text" style="text-decoration: none">
                                                        Conocer más →
                                                    </nuxt-link>
                                                </v-card-text>
                                            </v-card>
                                        </v-expand-transition>
                                    </v-card>
                                </v-hover>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import '@/assets/css/main.scss'
export default {
    name: 'ServiciosComponent',
    data: () => ({
        model: null,
        servicios: null,
        reveal: false,
    }),
    methods: {
        async getServicios() {
            let response = await axios.get('https://admin.jairmanrique.com/api/v1/portafolio/servicios/');
            this.servicios = response.data
        }
    },
    mounted() {
        this.getServicios()
    },
};
</script>

<style scoped>
.v-sheet {
    background: none !important;
    display: flex !important;
    justify-content: space-around !important;
}

.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}
</style>