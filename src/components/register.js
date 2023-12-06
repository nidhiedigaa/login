import React from 'react'

function Register() {
  return (

      <div className='container-fixed bg-light'  >
        <div className='row'> 
        <div className='d-flex flex-column justify-content-center align-items-center ' style={{height:"100vh", width:"100%"}} >
              
              <div className='mb-2'>
                <img src='/logo.png' alt='logo' width="100px" height="100px"/>
              </div>
  
                <div className='card' style={{height:"400px",width:"450px"}}>
                  
                  <form>
                    
                    <h3 className="text-center">Register</h3>
                     <h6 className='text-center'>Access to our dash Board</h6>
  
  
                  <div className="m-3">
                  <label htmlFor="email">Email*</label>
                  <input type="email" placeholder="Enter Email" className="form-control"/>
                    </div>
  
                  <div className="m-3">
                    <label htmlFor="password">Password*</label>
                    <input type="password" placeholder="Enter password"className="form-control"/>
                  </div>
  
                  <div className="m-3">
                  <label htmlFor="re-enter password">Repeat Password*</label>
                  <input type=" re -enter password" placeholder="Re-enter password"className="form-control"/>
                  </div>
  
                  <div className="d-grid m-3">
                  <button className="btn btn-danger">Register</button>
                  </div>
                  <div>
  
  
                  <p className='text-center'> Already have  an account?<a href='./Login'>Login</a></p>
                  </div>
                  </form>
            </div>
            
            
            </div>
         </div> 
    </div>
    




  )
}

export default Register;