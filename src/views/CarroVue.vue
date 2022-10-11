<template>
  <div>
    <h1>CARROS !</h1>
        <div class="card">
            <DataTable :value="modelos" responsiveLayout="scroll">
                <Column field="id" header="ID" :sortable="true"></Column>
                <Column field="nome" header="NOME" :sortable="true"></Column>
                <Column headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                <template #body="{data}">
                    <Button label="Submit" icon="pi pi-check" iconPos="right" @click="editar(data)">Editar</Button>
                </template>
                </Column> 
            </DataTable>

        </div>

     
  </div>
</template>

<script>
import axios from 'axios';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
    components: {
        Button,
        DataTable,
        Column

    }, 
    data () {
        return {
            modelos : []
        }
    },
    mounted () {
        axios
        .get('https://carros-app-example.herokuapp.com/carro')
        .then(resp => this.modelos = resp.data)

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