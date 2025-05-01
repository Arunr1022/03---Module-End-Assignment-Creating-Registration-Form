import { useState } from "react";
import { Link } from "react-router-dom";

function SigninPage() {

    return(
        <>
            <form className="signinpage">
                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">Email address : </label>
                    <input type="email" className="form-control" id="InputEmail1" ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword1"></input>
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
                <Link to="/Signup">
                <div className="Newaccountpage">Need an account ?</div>
                </Link>
                <Link to="/">
                <div className="Homepage">Home</div>
                </Link>
            </form>
        </>
    );
    
}

export default SigninPage