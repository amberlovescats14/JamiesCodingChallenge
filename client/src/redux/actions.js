
export const updateLeader = (formData) => async (dispatch, getState) => {
  const { leaderBoard } = getState()
  try {
    let index = await leaderBoard.findIndex(l => l.name === formData.name) 
    console.log(`INDEX~`  , index)
    dispatch({
      type: `UPDATE_LEADER`,
      payload: {
        leaderBoard,
        formData,
        index
      }
    })
    
  } catch (error) {
    console.error(error.message)
    console.log("update ERROR");
  }
}