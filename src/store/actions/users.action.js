/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import { actionTypes } from '../actionTypes'

const baseUrl = `https://api.jikan.moe/v4`

export function getDataUserResult(params) {

  return (dispatch) => {
    dispatch({ type: actionTypes.SEARCH_REQUEST, payload: params })
    return axios
      .get(`${baseUrl}/anime`, { params })
      .then((response) => {
        dispatch({
          type: actionTypes.SEARCH_SUCCESS,
          payload: response?.data,
        })
        return response.data
      })
      .catch((err) => {
        dispatch({ type: actionTypes.SEARCH_FAILED })
        throw err.response
      })
  }
}
