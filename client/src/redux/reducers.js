import { combineReducers } from 'redux'


// const leaderBoardInitial = []
const getLeaders = (state = [], action) => {
  switch(action.type){
    case `GET_LEADERS`: 
    return {
      ...state,
      leaderBoard: action.payload
    }
    default: return state
  }
}

export default combineReducers({
  leaderBoard: getLeaders
})