<template>
    <div>
    <h1>Form carros !</h1>
    <p>{{ $route.params.id }}</p>
    <p><button @click="voltar()">Voltar</button></p>
  </div>
</template>

<script>
export default {
    methods: {
        voltar() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>