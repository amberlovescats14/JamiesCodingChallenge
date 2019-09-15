import { combineReducers } from 'redux'


// const leaderBoardInitial = []
const getLeaders = (state = [], action) => {
  switch(action.type){
    default: return state
  }
}

export default combineReducers({
  leaderBoard: getLeaders
})