import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


function Login() {
  return(
    
    <div className='container-fixed bg-light'  >
    <div className='row'> 
    <div className='d-flex flex-column justify-content-center align-items-center ' style={{height:"100vh", width:"100%"}} >
          
          <div className='mb-2'>
            <img src='/logo.png' alt='logo' width="100px" height="100px"/>
          </div>

            <div className='card' style={{height:"400px",width:"450px"}}>
              
              <form>
                
                <h3 className="text-center">Login</h3>
                 <h6 className='text-center'>Access to our dash Board</h6>


              <div className="m-3">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder="Enter Email" className="form-control"/>
                </div>

              <div className="m-3" style={{position:"relative"}}>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter password"className="form-control"/>
                <div style={{position:"absolute",top:"30px",right:"10px"}}>
                <FontAwesomeIcon icon={faEye} />
                </div>
              </div>

               <div className="d-grid m-3">
              <button className="btn btn-danger">Login</button>
              </div>
              <div>


              <p className='text-center'>Don't  have  an account<a href='./Register'>Register</a></p>
              </div>
              </form>
        </div>
        
        
        </div>
     </div> 
</div>



   
                   
       );
};
export default Login;