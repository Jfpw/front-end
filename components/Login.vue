<template>
    <div>
        <h4><b>SRM - Sistema de Reserva Multimedia</b></h4>
        <form class="form-signin" @submit.prevent="editar">
            <img src="../img/logo_fapal_2022.jpg" height="90%" width="90%">
            <br>
            <br>
            <label for="inputEmail" class="sr-only">Email</label>
            <input type="email" id="inputEmail" v-model="obj_login.email" class="form-control" placeholder="Email" required autofocus>
            <br>
            <label for="inputPassword"  class="sr-only">Senha</label>
            <input type="password" id="inputPassword" v-model="obj_login.senha" class="form-control" placeholder="Senha" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            <hr/>
        </form>
        <a href="gerlane.cosi@gmail.com">Esqueci minha senha</a>
        <br>
        <router-link to="/dashboard">Ir para Dashboard (temporario)</router-link>
        <p class="mt-5 mb-3 text-muted">SRM - Sistema de Reserva Multimedia &copy; 2022</p>
    </div>
</template>

<script>
import Login from '../services/Login.js'
export default {
  data () {
    return {
      obj_login: {
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    editar () {
      Login.listar(this.obj_login).then(resposta => {
        console.log(resposta.data)
        if (resposta) {
          this.$router.push('dashboard')
        }
      })
    }
  }
}
</script>

<style scoped>
.body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #5f6104;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.h4{
    color: black;
}
</style>
