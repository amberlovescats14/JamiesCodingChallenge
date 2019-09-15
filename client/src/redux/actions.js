import axios from 'axios'

export const getLeaders = () => async (dispatch) => {
  try {
    const res = await axios.get('../scores.json')

    console.log(`data: `, res.data)
    dispatch({
      type: `GET_LEADERS`,
      payload: res.data
    })
  } catch (error) {
    console.error(error.message)
    console.log(`get leaders error`);
  }
}