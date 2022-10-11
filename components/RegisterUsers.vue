<template>
    <div>
        <h4>Cadastro de Usuário</h4>
        <form @submit.prevent="salvar">
            <input type="text" v-model="obj_User.name" id="inputNome" class="form-control" placeholder="Nome *" pattern="[a-zA-Z \s]+$" title="Insira apenas caracteres não numéricos e não especiais" required autofocus>
            <br>
            <input type="email" v-model="obj_User.email" id="inputEmail" class="form-control" placeholder="Email *" required autofocus>
            <br>
             <button class="btn btn-lg btn-primary btn-block" type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script>
import User from '../services/Users.js'
export default {
  data () {
    return {
      obj_User: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    salvar () {
      if (true) {
        User.salvar(this.obj_User).then(resposta => {
          console.log(resposta.data)
          alert('Cadastro efetuado com sucesso!')
          location.reload()
        }).catch(function (error) {
          console.log(error)
          alert('Erro, Cadastro não efetuado!')
        })
      } else {
        alert('Cadastro não Efetuado: As senhas se não correspondem')
      }
    }
  }
}
</script>

<style scoped>
</style>
