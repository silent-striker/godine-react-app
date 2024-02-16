import React, {useState} from 'react'
import Header from '../components/header'
import {useNavigate} from 'react-router-dom'
import './signup.css'

function ErrorMessage({msg}){
  return(
    <div className="error-msg text-danger">
      {msg}
    </div>
  );
}

function Signup({firstName, setFirstName, lastName, setLastName, email, setEmail, setSignedUp}) {

  const [validFn, setValidFn] = useState(true);
  const [validLn, setValidLn] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [samePassword, setSamePassword] = useState(true);
  const [validLen, setValidLen] = useState(true);
  const navigate = useNavigate();

  function redirectOnSucess(currValidFn, currValidLn, currValidEmail, currValidLen, currSamePassword){
    if(currValidFn === true && currValidLn === true && currValidEmail === true 
        && currValidLen === true && currSamePassword === true){
        setSignedUp(() => true);
        navigate("/profile", {firstName,lastName,email});
    }
  }

  function validateForm(){
    const fn = firstName;
    const ln = lastName;
    const e = email;
    const pwd = password;
    const confirmPwd = confirmPassword;

    // all validations
    const currValidFn = /^[A-Za-z]+$/.test(fn);
    const currValidLn = /^[A-Za-z]+$/.test(ln);
    const currValidEmail = /^[A-Za-z0-9-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(e);
    const currValidLen = pwd.length >= 8;
    const currSamePassword = pwd === confirmPwd;

    // updating state variables
    setValidFn(() => currValidFn);
    setValidLn(() => currValidLn);
    setValidEmail(() => currValidEmail)
    setValidLen(() => currValidLen);
    setSamePassword(() => currSamePassword);

    // redirect page when sucessful
    redirectOnSucess(currValidFn, currValidLn, currValidEmail, currValidLen, currSamePassword);
  }

  return (
    <div className='signup-page'>
        <div className='img-container' />
        <Header className="signup-header"/>

        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='card signup-form-bg'>
                <div className='row justify-content-center'>
                  <div className='col-md-11'>
                    <div className=' signup-form'>
                      <h3 className='card-title signup-form-title'>Sign up</h3>
                      <form>
                          <div className='row'>
                            <div className='form-group col-md-6'>
                              <input type="text" className="form-control" id="firstNameInput" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                                { !validFn? <ErrorMessage msg="First Name can only contain letters" />: null }
                            </div>
                            <div className='form-group col-md-6 align-contents-center'>
                              <input type="text" className="form-control " id="lastNameInput" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                                { !validLn? <ErrorMessage msg="Last Name can only contain letters" />: null }
                            </div>
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control my-3" id="emailInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                              { !validEmail? <ErrorMessage msg="Please enter a valid email" />: null }
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control my-3" id="passwordInput" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                              {
                                !samePassword? <ErrorMessage msg="Passwords do not match" /> : 
                                  !validLen? <ErrorMessage msg="Minimum 8 characters" /> : null
                              }
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control my-3" id="confirmPasswordInput" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                              { !samePassword? <ErrorMessage msg="Passwords do not match" />: null }
                          </div>
                      </form>
                      <div className='text-center'>
                      <button className='btn btn-primary signup-submit' onClick={(e) => validateForm()} >Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Signup;