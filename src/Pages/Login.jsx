import React from 'react'
import { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import './CSS/LoginSignup.css'


const Login = () => {
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate();
  const [error,setError] = useState('')



  const onSubmitSuccess = (jwtToken) => {
    Cookies.set('token', jwtToken, { expires: 30 });
    console.log("chcekckkkk")
    navigate('/');
  };

//   const  onSubmitFailure = errorMsg => {
//     this.setState({showSubmitError: true, errorMsg})
//   }

const onFailure = (e)=> {
    setError(e)
}
  const sendData = async ()=>{
    const userdetails = {
      name,password
    }
    const options = {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdetails),
    }

  const response = await fetch('https://e-commercebackend-oyde.onrender.com/login',options)
  const data = await response.json()

  if (response.ok) {
    onSubmitSuccess(data.token)
  } else{
    onFailure(data.message)
  }
   
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>User Login </h1>
        <div className="loginsignup-fields">
          <input type="text"  placeholder='Your Name' onChange={(e)=>setName(e.target.value)}/>
          <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button onClick={sendData}>Login</button>
        <p style={{color:'red'}}>{error}</p>
        <p className="loginsignup-login">Create an account ? <span><Link to='/signup'>Signup Here</Link></span></p>

        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
