<template>
    <div>
        <h1>MARCAS !</h1>
            
            <div class="card">    
                <DataTable :value="marcas" responsiveLayout="scroll">
                    <Column field="id" header="ID" :sortable="true"></Column>
                    <Column field="nome" header="NOME" :sortable="true"></Column>   
                    <Column headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                            <template #body="{data}">
                                <Button label="Submit" icon="pi pi-check" iconPos="right" @click="editar(data)">Editar</Button>
                            </template>
                    </Column>                                                   
                </DataTable>                            
            </div>

                    <!-- <td>{{m.id}}</td>
                    <td>{{m.nome}}</td> -->                    
                    <!-- <button style="{backgroundColor: var(--blue-500)}">Editar</button> -->
                    <!-- <Button label="Submit" icon="pi pi-check" iconPos="right" >Testes</button> -->
                    <!-- <Button label="Submit" class="p-button-text" >Testes</button> -->
                    <!-- <td><a href="javascript:void(0)" @click="editar(m)">Editar</a></td> -->
                    <!-- <td> <button @click="editar(m)">Editar</button></td>  -->
            
    </div>
</template>

<script>
import axios from 'axios';
import Button from 'primevue/button'
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