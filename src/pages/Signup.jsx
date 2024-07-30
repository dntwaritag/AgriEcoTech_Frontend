import React, { useState } from "react";
import logo from "/images/logo3.jpg";
import { Link } from "react-router-dom";
import { usestateContext } from "../context/ContextProvider";
function Signup() {
    const [first_name, setfirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [city, setCity] = useState();
    const [phone, setPhone] = useState();
    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        country: "",
    });
    const { SignupMutation } = usestateContext();
    // const validateForm = () => {
    //     let valid = true;
    //     const newErrors = { email: "", password: "", country: "" };

    //     if (!email) {
    //         valid = false;
    //         newErrors.email = "email is required";
    //     }

    //     if (!password) {
    //         valid = false;
    //         newErrors.password = "password is required";
    //     }
    //     if (!country) {
    //         valid = false;
    //         newErrors.fullNames = "country is required";
    //     }

    //     setErrors(newErrors);
    //     return valid;
    // };
    const handlesubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // if (validateForm()) {
        // }
        const payload = {
            first_name,
            last_name,
            email,
            password,
         
        };
        SignupMutation.mutate(payload);
        // setLoading(true);
    };

    return (
        <div className="Signup-wrapper">
            <div className="signup-container">
                <div className="signup-content1">
                    <img src={logo} alt="" />
                    <h1>Registration Portal</h1>
                    <h6>Welcome</h6>
                    <p>
                        This is Registration Portal create account for free and
                        start enjoying our services and course
                    </p>
                </div>
                <div className="signup-content2">
                    <h3>Signup</h3>
                    <form onSubmit={handlesubmit} method="post">
                        <label htmlFor="firstname">first name</label>
                        <input
                            type="text"
                            first_name
                            placeholder="First name"
                            onChange={(e) => setfirstName(e.target.value)}
                        />
                        <label htmlFor="lastname">last name</label>
                        <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="last name"
                        />
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
            
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                        <button className="btn-signup">
                            {loading ? <>Loading...</> : <>Signup</>}
                        </button>
                        <div className="flex-message">
                            <p>
                                Already Have an Account?{" "}
                                <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
