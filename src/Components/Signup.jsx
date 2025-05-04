
function Signup() {

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="Inputfirstname" className="form-label">First Name : </label>
                    <input type="text" className="form-control" id="Inputfirstname" aria-describedby="emailHelp" />
                    <label htmlFor="Inputlastname" className="form-label">Last Name : </label>
                    <input type="text" className="form-control" id="Inputlastname" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Email : </label>
                    <input type="text" className="form-control" id="InputPassword" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Inputphone" className="form-label">Mobile Number : </label>
                    <input type="number" className="form-control" id="Inputphone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputDOB" className="form-label">Date of Birth : </label>
                    <input type="date" className="form-control" id="InputDOB" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputAddress" className="form-label">Address : </label>
                    <input type="text" className="form-control" id="InputAddress" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputCity" className="form-label">City : </label>
                    <input type="text" className="form-control" id="InputCity" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputState" className="form-label">State : </label>
                    <input type="text" className="form-control" id="InputState" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPinCode" className="form-label">Postal Code : </label>
                    <input type="number" className="form-control" id="InputPinCode" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputCountry" className="form-label">Country : </label>
                    <input type="text" className="form-control" id="InputCountry" />
                </div>
                <label htmlFor="Courses">Choose a course:</label>
                <select className="Courses" id="Courses">
                    <option value="FSD">Full Stack Developement</option>
                    <option value="DataS">Data Science</option>
                    <option value="Robots">Robotics</option>
                    <option value="AI">AI Generative</option>
                </select><br />
                <br />
                <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
        </>
    );

}

export default Signup