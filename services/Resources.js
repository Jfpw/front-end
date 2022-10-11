import { http } from './config'

export default {
  listar: (nome) => {
    return http.get('datashows')
  },
  salvar: (recurso) => {
    console.log('datashow', recurso)
    return http.post('datashows', recurso)
  },
  editar: (recurso) => {
    return http.put('recursos', recurso)
  },
  excluir: (recurso) => {
    return http.delete('recursos', recurso)
  },
  reservar: (reserva) => {
    return http.reservar('recursos', reserva)
  }
}
