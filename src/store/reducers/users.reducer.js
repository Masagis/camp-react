/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable default-param-last */
import { actionTypes } from '../actionTypes/index'

const initState = {
  isLoading: false,
  animeList: null,
}

const anime = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        animeList: action.payload,
      }
    case actionTypes.SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      }

    default:
      return state
  }
}

export default anime