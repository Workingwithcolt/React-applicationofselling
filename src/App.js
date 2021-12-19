import React from 'react';

import './App.css';

import {Route,Switch,Redirect} from 'react-router-dom';

import HomePage from '../src/component/pages/homepage/Homepage.component';

import ShopPage from '../src/component/pages/shop/shop.component';

import Header from '../src/component/header/header.component';

import SignInAndSignUpPage from '../src/component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {auth,createUserProfileDocument} from '../src/component/firebase/fiberbase.util'

import { connect } from 'react-redux'

import { setCurrentUser } from '../src/component/Redux/user.action'


// import firebase from './component/firebase/fiberbase.util'
 
// const HatsPage = () =>{
// return (
//   <div>
//     {/* <Link to="/hats/topics">CLick me </Link>
//     <br/>
//     <br/>
//     <button className= "button1" onClick = {() =>{props.history.push('/hats/topics')}}>Please CLick Me to navigate to topics</button> */}
//     <h1>hats page CHETAN SUNIL MOHITE IS CLEVER STUDENT</h1> 
//     </div>
// )
// }
// const TopicList =(props) =>{
// console.log(props)
//   return(
//     <div>
//     <Link to = "/hats">Back</Link>
//     <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
//     <Link to={`${props.match.url}/14`}>TO TOPIC 14</Link>
//     <Link to={`${props.match.url}/15`}>TO TOPIC 15</Link>
//     <br/>
//     <br/>
//     <br/>
//     <button onClick = {() =>props.history.push("/hats")}>Please CLick
//     Me to navigate to hats</button>
//     <h1>Topic List</h1>
//     </div>
//   )
// }
//  const TopicDetail = (props)=>{
//    console.log(props)
//    return (
//      <div>
//        <h1>Topic Detail Page Number:{props.match.params.topicID}</h1>
//        </div>
//    )
//  }




class  App extends React.Component{
  // constructor(){
  //   super();
  //   this.state ={
  //     currentUser:null
  //   }
  // }
  // componentDidMount(){
  //   firebase.auth().onAuthStateChange(user  => {
  //     this.setState({
  //       currentUser:user})
  //     console.log(user)
  //   })
  // }
  
  unsubscribeFromAuth = null
  componentDidMount(){
    const { setCurrentUser } = this.props; 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
      // this.setState({ 
      //   currentUser:user
      // })
      if(user){
        createUserProfileDocument(user)
        setCurrentUser({user})
        console.log(user)
    }
    setCurrentUser(user)
  })

    // console.log(this.state)  
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path= '/' component = {HomePage}/>
      <Route exact  path= '/shop' component = {ShopPage}/>
      <Route exact  path= '/signIn' render = {() => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>}/>
      {/* <Route exact path ='/hats/TopicDetail' component={TopicDetail}/> */}
      </Switch>
      </div>
  );
}
}

// That bellow funtion we use for getting the current User from the root redux for the use of the above 
//Redirect function 
const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
})

const mapDispatchToProps = (dispatch) => {
  return{
  setCurrentUser:user => dispatch(setCurrentUser(user))
}
}

export default  connect(mapStateToProps,mapDispatchToProps)(App);

