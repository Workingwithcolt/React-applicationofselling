import React from 'react'

import   {firebase,auth}  from '../firebase/fiberbase.util.js'

import './sign-in.style.scss'

import CustomButton from '../custom-button/custom-button.component'

import FormInput  from '../form-input/form-input.component'

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';

class SignIn extends React.Component{
    constructor(props){
        super(props);
    this.state ={
        email : '',
        password :'',
        isSignIn:false
    }
}
 handleChange = event =>{
     const { name ,value } = event.target;
     this.setState({ [name]:value})
 }
handleSubmit = async (event) =>{
event.preventDefault();
const {email,password} = this.state

await signInWithEmailAndPassword(auth,email,password).then((userCredential) =>{
    console.log("C")
    const user = userCredential.user
    console.log("sign in is done")
}).catch((e) =>{
    createUserWithEmailAndPassword(auth,email,password).then((userCredential) =>{
        const user  = userCredential.user
    })
    .catch((error) =>{
        console.log(error+"It is an error")
    }) 
})

this.setState({email:'',password:''})
}

render(){

        const SignIn =() =>{
            var google_provider = new  firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(google_provider)
            .then((re) =>{
                console.log(re)
                this.setState({isSignIn:true})
                // this.setState({object:re})
            })
            .catch((e) =>{
                console.log(e)
            })
        }
        
    return (
        <div className = 'sign-in'>
        <h2>already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit = {this.handleSubmit}>
            <FormInput name ='email' type = 'email' value = {this.state.email} handleChange={this.handleChange} label = 'email'required/>
            <FormInput  name ='password' type ='password'  value = {this.state.password} handleChange={this.handleChange} label ='Password'required/>
            <div className = 'buttons'>
            <CustomButton type ='submit'  >Sign in</CustomButton>
             <CustomButton onClick={SignIn} isGoogleSignIn = {this.state.isSignIn}>{''}Sign in A With Google{''}</CustomButton>
             </div>
        </form>
        </div>
    )
}
}
export default SignIn;