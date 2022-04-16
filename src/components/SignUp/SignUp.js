import React from "react";
import NavPage from "../Navbar/NavPage";

const SignUp = () => {
  return (
    <div>
      <NavPage />
      <div>
        <div className="d-flex justify-content-center">
          <img
            className="w-25"
            src="https://i.ibb.co/XWYMKZh/logo2.png"
            alt=""
          />
        </div>
       <div className='d-flex justify-content-center mt-5'>
       <form>
       <input className="mt-2 px-2 py-1 border" type="text" placeholder="Name" />
       <br />
       <input className="mt-2 px-2 py-1 border" type="email" placeholder="Email" />
       <br />
       <input className="mt-2 px-2 py-1 border" type="password" placeholder="Password" />
       <br />
       <input className="mt-2 px-2 py-1 border" type="password" placeholder="Confirm Password" />
       <br />
       <button className="mt-2 w-100">Register</button>
       <p className="text-danger">Allready have an account?</p>
     </form>
       </div>
      </div>
    </div>
  );
};

export default SignUp;
