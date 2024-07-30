import React, { useState } from 'react'
import logo from '/images/logo3.jpg'
import { Link } from 'react-router-dom'
import { usestateContext } from "../context/ContextProvider";

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState({ email: '', password: '' });
  const { LoginMutation,} = usestateContext()
  const[loading,setLoading]=useState(false)
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
        valid = false;
        newErrors.email = 'email is required';
    }

    if (!password) {
        valid = false;
        newErrors.password = 'password is required';
    }

    setErrors(newErrors);
    return valid;
};
const handlesubmit = (e) => {


    e.preventDefault()
    setLoading(true)
    if (validateForm()) {
        const payload = { email, password }
        LoginMutation.mutate(payload)
        setLoading(true)
    }
    else {
        setLoading(false)
    }


}
  return (
<div className='Signup-wrapper'>
      <div className="signup-container">
      <div className="signup-content1">
<img src={logo} alt="" />
<h1>Login Portal</h1>
<h6>Welcome</h6>
<p>This is Registration Portal create account for free
   and start enjoying our services and course</p>
      </div>
      <div className="signup-content2">
        <h3>Login</h3>
        <form action="" onSubmit={handlesubmit} method="post">
  
          <label htmlFor="email">email</label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder='Email' />
          <div className="error">{errors.email}</div>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
          <div className="error">{errors.password}</div>
          <button className='btn-signup'>{loading?(<>Loading....</>):(<>Login</>)}</button>
          <div className="flex-message">
            <p>Don't you have an account ? <Link to='/signup'>signup</Link></p>
          </div>
        </form>
      </div>


      </div>
    </div>
  )
}

export default Login