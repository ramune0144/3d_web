import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

async function loginUser(credentials) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Login =()=> {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");


  const loginSubmit = async (e) => {
    e.preventDefault();
   
    const token = await loginUser({
        email,
        password
      });
      if (token.ok ===true){  
        sessionStorage.setItem('token', JSON.stringify(token));
        window.location.reload(false);}
    else{
        setpasswordError("Invalid username or password!")
    }
    
  };

  return (
    <div style={{marginTop:"10%"}}>
      <div className="container" >
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                
              </div>
              <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              {/* <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div> */}
              <div></div>
               <button type="submit" className="btn btn-primary" style={{marginTop:"5%"}} >
                Submit
              </button>
             
            </form>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Login;
