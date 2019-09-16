import Form from '../components/Form'
import { connect } from 'react-redux'
import { updateLeader } from '../redux/actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  updateLeader: (formData) => dispatch(updateLeader(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)