import { useState } from "react";
import { Link } from "react-router-dom";

function SigninPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmission = (e) => {

        if(!email){
            alert("Email ID field is required");
            return;
        }

        if(!/\S+@\S+\.\S+/.test(email)){
            alert("Email ID is incorrect");
            return;
        }
        if(!password){
            alert("Password field is required");
            return;
        }
    }

    return(
        <>
            <form className="signinpage" onSubmit={handleSubmission}>
                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label" >Email address : </label>
                    <input type="text" className="form-control" id="InputEmail1" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}></input>
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