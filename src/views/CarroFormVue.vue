<template>
    <div>
      <h1>Form Carros</h1>
      <form @submit.prevent="salvar()">
        <AutoComplete required v-model="modelos.nome">
            <div class="flex align-items-center country-item">                
                <label for="nome">Nome:</label>
                <input type="text" size="40" required v-model="modelos.nome"/>
                <br>
            </div>  
         </AutoComplete><br>
         <span v-if="mensagem">{{mensagem}}<br/></span> <br>
         <Button label="Submit" icon="pi pi-check" iconPos="right" @click="salvar()">Salvar</Button>
         <Button label="Subimit" icon="pi pi-check" iconPos="right" @click="voltar()">Voltar</Button>      
      </form>
      
    </div>
  </template>

<script>
import Button from 'primevue/button';
import axios from 'axios';

export default {
    components: {
        Button

    }, 
    data(){
        return{
            modelos:{

            },
            mensagem: null
        }
    },
    mounted(){
        const id = this.$route.params.id
        if (id) {
          axios.get(
            `https://carros-app-example.herokuapp.com/carro/${id}`)
                .then(resp => this.modelos = resp.data)
                .catch(error => {alert(error)
                this.$router.push("/carro")
            })
        }
        else {
          this.modelos = {
            id:null,
            nome: ''
          }
        }
    },
    methods: {
        salvar(){
            axios.post('https://carros-app-example.herokuapp.com/carro', this.modelos)
            .then(() => this.mensagem = "Registro gravado")
            .catch(error => this.mensagem = `Problema na gravação ${error}`)
        },
        voltar() {
            this.$router.go(-1)
        }
    }

}
</script>

<style>

</style>