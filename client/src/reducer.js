export default function reducer(state, { type, payload }) {
  switch(type) {
    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: payload
      }
    case 'IS_LOGGED_IN':
      return {
        ...state,
        isAuth: payload
      }
    case 'SIGNOUT_USER':
      return {
        ...state,
        isAuth: false,
        currentUser: null
      }
    case 'CREATE_DRAFT':
      return {
        ...state,
        draft: {
          latitude: 0,
          longitude: 0
        }
      }
    case 'UPDATE_DRAFT_LOCATION':
      return {
        ...state,
        draft: payload
      }
    case 'DELETE_DRAFT':
      return {
        ...state,
        draft : null
      }
    case 'GET_PINS':
      return {
        ...state,
        pins: payload
      }
    case 'CREATE_PIN': {
      return {
        ...state,
        pins: state.pins
                .filter(p => p._id !== payload._id)
                .concat(payload)
      }
    }

    default:
      return state
  }
}
