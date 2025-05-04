import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {

    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Mnumber, setMnumber] = useState('');
    const [DOB, setDOB] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [Pincode, setPincode] = useState('');
    const [Country, setCountry] = useState('');
    const [Course, SetCourse] = useState('');

    const handleSubmission = (e) => {

        if(Firstname == ""){
            alert("Firstname field is required");
            return;
        }

        if(Lastname == ""){
            alert("Lastname field is required");
            return;
        }

        if(Email == "" || !Email.includes("@") || !Email.includes(".com")){
            alert("Please Check the Email ID is Correct ?");
            return;
        }

        if(Password == "" || Password.length < 8){
            alert("Please check the password constraints");
            return;
        }

        if(Mnumber == "" || Mnumber.length < 10){
            alert("Please check the mobile number");
            return;
        }

        if(DOB == ""){
            alert("Date Of Birth field is required");
            return;
        }
        if(Address == ""){
            alert("Address field is required");
            return;
        }
        if(City == ""){
            alert("City field is required");
            return;
        }
        if(State == ""){
            alert("State field is required");
            return;
        }
        if(Pincode == ""){
            alert("Pincode field is required");
            return;
        }
        if(Country == ""){
            alert("Country field is required");
            return;
        }
        if(Course == ""){
            alert("Select the Course");
            return;
        }

        alert("Account Created Successfully, Logging in now");
    }





    return (
        <>
            <div className="SignupPageWrapper" onSubmit={handleSubmission}>
                <form className="Signuppage">
                    <div className="mb-3 d-flex gap-3" >
                        <label htmlFor="Inputfirstname" className="form-label">First Name : </label>
                        <input type="text" className="form-control" id="Inputfirstname"  value={Firstname} onChange={(e) =>  setFirstname(e.target.value)} />
                        <label htmlFor="Inputlastname" className="form-label">Last Name : </label>
                        <input type="text" className="form-control" id="Inputlastname" value={Lastname} onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label">Email : </label>
                        <input type="text" className="form-control" id="InputEmail" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="InputPassword" className="form-label">Password : </label>
                        <input type="password" className="form-control" id="InputPassword" value={Password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Inputphone" className="form-label">Mobile Number : </label>
                        <input type="number" className="form-control" id="Inputphone" value={Mnumber} onChange={(e) => setMnumber(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputDOB" className="form-label">Date of Birth : </label>
                        <input type="date" className="form-control" id="InputDOB" value={DOB} onChange={(e) => setDOB(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputAddress" className="form-label">Address : </label>
                        <input type="text" className="form-control" id="InputAddress" value={Address} onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div className="mb-3 d-flex gap-3">
                        <label htmlFor="InputCity" className="form-label">City  </label>
                        <input type="text" className="form-control" id="InputCity" value={City} onChange={(e) => setCity(e.target.value)} />
                        <label htmlFor="InputState" className="form-label">State  </label>
                        <input type="text" className="form-control" id="InputState" value={State} onChange={(e) => setState(e.target.value)} />
                        <label htmlFor="InputPinCode" className="form-label">PinCode  </label>
                        <input type="number" className="form-control" id="InputPinCode" value={Pincode} onChange={(e) => setPincode(e.target.value)} />
                        <label htmlFor="InputCountry" className="form-label">Country  </label>
                        <input type="text" className="form-control" id="InputCountry" value={Country} onChange={(e) => setCountry(e.target.value)} />
                    </div>

                    <label htmlFor="Courses">Choose a course:</label>
                    <select className="Courses" id="Courses" value={Course} onChange={(e) => SetCourse(e.target.value)}>
                        <option value="FSD">-Select-</option>
                        <option value="FSD">Full Stack Developement</option>
                        <option value="DataS">Data Science</option>
                        <option value="Robots">Robotics</option>
                        <option value="AI">AI Generative</option>
                    </select><br />
                    <br />
                    <button type="submit" className="btn btn-primary">SignUp</button><br /><br />
                    <Link to="/">
                        <div className="Homepage">Home</div>
                    </Link>
                </form>

            </div>

        </>
    );

}

export default Signup