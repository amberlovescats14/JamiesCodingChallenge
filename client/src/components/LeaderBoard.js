import React, {useEffect} from 'react'
import { getLeaders } from '../redux/actions';

const LeaderBoard = (props) => {
  useEffect(()=> {
    props.getLeaders()
  }, )

  // const {leaderBoard } = props
  // let sorted = leaderBoard.sort((a,b)=> a.RSS - b.RSS)
  // let filter = sorted.filter((s, i) => i < 10)
  return (
    <div>
      <h1>leaderboard</h1>
      {/* {filter.map(n=> {
        return (
          <div key={n.name} style={{border: '2px solid black'}}>
              <h3>{n.name}</h3>
              <p>{n.RSS}</p>
              <button>EDIT</button>
              <button>Delete</button>
            </div>
        )
      })} */}
    </div>
  )
}

export default LeaderBoard
