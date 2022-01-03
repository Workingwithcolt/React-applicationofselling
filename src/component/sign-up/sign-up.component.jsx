import React from 'react'

import FormInput from '../form-input/form-input.component'

import CustomButton from '../custom-button/custom-button.component'

import {auth,createUserProfileDocument} from '../../component/firebase/fiberbase.util'

import './sign-up.style.scss'
import { createUserWithEmailAndPassword } from '@firebase/auth';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        }
    }
    handleSubmit = async (event) =>{
        event.preventDefault();
        const {displayName,email,password,confirmpassword} = this.state

        if(password !== confirmpassword){
            alert("Password Dont Match")
            return;
        }
         const Name = "";
    try{
         const user = await createUserWithEmailAndPassword(auth ,email,password).then((userCredential)=>{
             const user = userCredential.user
             console.log(userCredential)
             console.log("dfdnjf")
             Name = auth.displayName
             return user
         }).catch((e) =>{
             console.log(e)
         })
         console.log("sd")
         createUserProfileDocument(user,Name);
         Name = ""
         this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        })
        
    }catch(e){
        console.log(e)
    }
       
    }
    handleChange = (event) =>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    }
    render(){
        const {displayName,email,password,confirmpassword} = this.state
        return(
            <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with Your email and password </span>
            <form className = 'sign-up-form' onSubmit = {this.handleSubmit}>
            <FormInput
            type = 'text'
            name ='displayName'
            value = {displayName}
            onChange = {this.handleChange}
            label='Display Name'
            required
            />
           
            <FormInput
            type = 'email'
            name ='email'
            value = {email}
            onChange = {this.handleChange}
            label='Email'
            required
            />
            
            <FormInput
            type = 'password'
            name ='password'
            value = {password}
            onChange = {this.handleChange}
            label='password'
            required
            />
            
            <FormInput
            type = 'password'
            name ='confirmpassword'
            value = {confirmpassword}
            onChange = {this.handleChange}
            label='confirm password'
            required
            />
            
            <CustomButton type = 'submit'>SIGN UP</CustomButton>
            </form>
            </div>
        )
        }
    
}

export default SignUp;