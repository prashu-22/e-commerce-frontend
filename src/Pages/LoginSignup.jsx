import React from 'react'
import { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'


import './CSS/LoginSignup.css'


const LoginSignup = () => {
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const navigate = useNavigate();
  const [error,setError] = useState('')

  const onFailure = (e)=>{
    setError(e)
  }
  const sendDatas = async ()=>{
    const userdetails = {
      name,password,email
    }
    const options = {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdetails),
      }

      const response = await fetch('https://e-commercebackend-oyde.onrender.com/signin',options)
      const data = await response.json()
      console.log(data)
      if(response.ok){
        navigate("/login")
      }else{
        onFailure(data.message)
      }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text"  placeholder='Your Name' onChange={(e)=>setName(e.target.value)}/>
          <input type="email" placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button onClick={sendDatas}>Continue</button>

        <p style={{color:'red'}}>{error}</p>

        <p className="loginsignup-login">Already have an account ? <span><Link to='/login'>Login Here</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        
      </div>
    </div>
  )
}

export default LoginSignup
