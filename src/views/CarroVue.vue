<template>
  <div>
    <h1>CARROS !</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th></th>
            </tr>
            <tr v-for="m in modelos" :key="m.id">
                <td>{{m.id}}</td>
                <td>{{m.nome}}</td>
                <td><a href="javascript:void(0)" @click="editar(m)">Editar</a></td>
                <!-- <td> <button @click="editar(m)">Editar</button></td>  -->
            </tr>

        </table>
  </div>
</template>

<script>
export default {
    data () {
        return {
            modelos : [
                {
                    id:1,
                    nome: 'HB20'
                },
                {
                    id:2,
                    nome: 'Focus'
                }
            ]
        }
    },

    methods : {
        editar(modelo) {
            this.$router.push(`/carro-edicao/${modelo.id}`)
        }
    }
}
</script>

<style>

</style>