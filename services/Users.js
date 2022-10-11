import { http } from './config'

export default {
  listar: (nome) => {
    return http.get('professores')
  },
  salvar: (user) => {
    console.log('user', user)

    // data = {
    //   'name': user,
    //   'email': email
    // }
    return http.post('professores', user)
  },
  excluir: (id) => {
    return http.delete('usuarios', id)
  },
  editar: (user) => {
    return http.put('usuarios', user)
  }
}
