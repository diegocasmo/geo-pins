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
        },
        currentPin: null
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
    case 'CREATE_PIN':
      return {
        ...state,
        pins: state.pins
                .filter(p => p._id !== payload._id)
                .concat(payload)
      }
    case 'SET_PIN':
      return {
        ...state,
        currentPin: payload,
        draft: null
      }
    case 'DELETE_PIN': {
      const deletedPin = payload
      const isCurrentPin = deletedPin._id === state.currentPin._id
      const nextPins = state.pins.filter(p => p._id !== deletedPin._id)
      if (state.currentPin && isCurrentPin) {
        return {
          ...state,
          pins: nextPins,
          currentPin: null
        }
      } else {
        return {
          ...state,
          pins: nextPins
        }
      }
    }
    case 'CREATE_COMMENT':
      return {
        ...state,
        pins: state.pins.map(p => p._id === payload._id ? payload : p),
        currentPin: payload
      }

    default:
      return state
  }
}
