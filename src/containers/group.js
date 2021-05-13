import Group from '../components/group'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import * as sortActions from '../actions/sortActions'

const mapStateToProps = ({car}) => ({
  ...car
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(sortActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Group)