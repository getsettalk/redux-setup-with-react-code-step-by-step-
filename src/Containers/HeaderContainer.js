import { connect } from 'react-redux';
import Headers from '../Components/Headers';


// we bind this two function for main Hme component
const mapStateToProps =state=>({

  data :state.cardItems
})

const mapDispatchToProps =dispatch =>({
   
})

export default connect(mapStateToProps,mapDispatchToProps)(Headers)
