import { mapState, mapActions } from 'vuex';

export default (await import('vue')).defineComponent({
components: {
TheHeader,
TheFooter,
},
data: () => ({
tab: null,
items: [
{
title: "Nombre del servicio",
src: "img05.png",
},
{
title: "Nombre del servicio",
src: "img06.png ",
},
{
title: "Nombre del servicio",
src: "img07.png",
},
],
}),
computed: {
...mapState(['tecnologias'])
},
created() {
this.loadTecnologias();
},
methods: {
...mapActions(['loadNosotros'])
}
});
