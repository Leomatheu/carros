<template>
  <div>
        <h1>MARCAS !</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th></th>
            </tr>
            <tr v-for="m in marcas" :key="m.id">
                <td>{{m.id}}</td>
                <td>{{m.nome}}</td>
                <td><a href="javascript:void(0)" @click="editar(m)">Editar</a></td>
                <!-- <td> <button @click="editar(m)">Editar</button></td>  -->
            </tr>

        </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            marcas : []
        }
    },
    mounted () {
        axios
        .get('https://carros-app-example.herokuapp.com/marca')
        .then(resp => this.marcas = resp.data)

    },

    methods : {
        editar(marca) {
            this.$router.push(`/marca-edicao/${marca.id}`)
        }
    }
}
</script>

<style>

</style>