<template>
    <div>
      <h1>Marcas</h1>
      <form @submit.prevent="salvar()">
        <AutoComplete required v-model="marcas.nome">
            <div class="flex align-items-center country-item">                
                <label for="nome">Nome:</label>
                <input type="text" size="40" required v-model="marcas.nome"/>
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
  import axios from 'axios';
  import Button from 'primevue/button'
  import AutoComplete from 'primevue/autocomplete';

  export default {
    components: {
        Button,
        AutoComplete
    }, 
      data() {
        return {
          marcas: {
          },
          mensagem: null
        }
      },
      mounted() {
        const id = this.$route.params.id
        if (id) {
          axios.get( 
             `https://carros-app-example.herokuapp.com/marca/${id}`)
            .then(resp => this.marcas = resp.data)
            .catch(error => { 
                alert(error)
                this.$router.push("/marca")
            })
        }
        else {
          this.marca = {
            id:null,
            nome: ''
          }
        }
      },
      methods: {
          salvar(){
            axios.post('https://carros-app-example.herokuapp.com/marca',
                this.marcas)
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