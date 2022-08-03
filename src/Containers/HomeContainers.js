import { connect } from 'react-redux';
import Home from '../Components/Home';
import {addToCart}  from '../Services/Actions/actions';

// we bind this two function for main Hme component
const mapStateToProps =state=>({
  DataToaddCart:state
})

const mapDispatchToProps =dispatch =>({
    addToCartHandler : data=>dispatch(addToCart(data)) // here addToCartHandler will call at front end react component 
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;
