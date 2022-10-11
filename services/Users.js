import { http } from './config'

export default {
  listar: (nome) => {
    return http.get('professores')
  },
  salvar: (user) => {
    console.log('user', user)
    return http.post('professores', user)
  },
  excluir: (id) => {
    return http.delete('professor' + '/' + id)
  },
  editar: (data) => {
    return http.put('professor' + '/' + data.pk, data)
  }
}
