<template>
  <div>
    <h1>Form marcas !</h1>
    <p>{{ $route.params.id }}</p>
    <p><button @click="voltar()">Voltar</button></p>
  </div>
</template>

<script>
export default {
    mounted () {
        console.log(this.$route.params.id)
    },

    methods: {
        voltar() {
            // this.$router.go(-1) volta somente para a página anterior
            this.$router.push('/') //volta para a rota descrita
        }
    }
}
</script>

<style>

</style>