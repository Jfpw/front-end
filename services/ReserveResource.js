import { http } from './config'

export default {
  listar: (nome) => {
    return http.get('datashows')
  },
  salvar: (datas) => {
    console.log('datashowloans', datas)
    return http.post('datashowloans', datas)
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
