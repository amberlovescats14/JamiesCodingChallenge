import { combineReducers } from 'redux'


// const leaderBoardInitial = []
const getLeaders = (state = [], action) => {
  const { type, payload } = action
  switch(type){
    case `UPDATE_LEADER`: 
    console.log();
    return {
      ...state,
      leaderBoard: payload.leaderBoard.slice(payload.index, 1, payload.formData)
    }
    default: return state
  }
}

export default combineReducers({
  leaderBoard: getLeaders
})