import type from './type.js'

const MiReducer = (state = {}, action) => {
  switch (action.type) {
    case type.login:
      return {
        logeado: true,
        usuario: action.payload,
      }

    case type.logout:
      return {
        logeado: false,
        usuario: null,
      }

    default:
      return state
  }
}

export default MiReducer