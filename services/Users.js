import { http } from './config'

export default {
  listar: (nome) => {
    return http.get('professores')
  },
  salvar: (user) => {
    return http.post('usuarios', user)
  },
  excluir: (id) => {
    return http.delete('usuarios', id)
  },
  editar: (user) => {
    return http.put('usuarios', user)
  }
}
