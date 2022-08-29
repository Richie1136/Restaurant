export const initialState = {
  user: null
}

const userReducer = (state, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...state,
      user: action.user
    }
  }
}

export default userReducer