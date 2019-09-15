import LeaderBoard from '../components/LeaderBoard'
import { connect} from 'react-redux'
import { getLeaders } from '../redux/actions'

const mapStateToProps = state => ({
  leaderBoard: state.leaderBoard
})
const mapDispatchToProps = dispatch => ({
  getLeaders: () => dispatch(getLeaders())
})

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)