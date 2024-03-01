import React, {useState} from "react";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import {Link, useHistory, useLocation, useNavigate} from 'react-router-dom';
import { UserContext } from "../../../App";
import log from '../../../images/doc/info.svg';
import register from '../../../images/doc/register.svg';
import SignIn from './SignIn';
import './SignInForm.css';
import SignUp from './SignUp';
import toast, {Toaster} from 'react-hot-toast';


const SignInForm = () => {
    const [isSignUp, setSignUp] = useState(false);

    const handleResponse = (res) => {

    }
    
    return (
        <div className={`${isSignUp  ? "signin-signup-container sign-up-mode" : "signin-signup-container"} `}>
        <Link to="/">
            <span className="pageCloseBtn"><FaTimes /></span>
        </Link>
        <div className="forms-container">
            <div className="signIn-signUp">
                <signIn handleResponse={handleResponse} />
                <signUp handleResponse={handleResponse} />
            </div>
        </div>

        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>New here ?</h3>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus expedita quis ipsam soluta libero porro eum perferendis dolor,
                         nisi ipsum! Consequuntur nisi delectus atque ullam et! Nulla nihil nam dolorem?</p>
                </div>
                <img src={`${log}`} alt="" className="pImg" />
            </div>

            <div className="panel right-panel">
                <div className="content">
                    <h3>One of Us</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui temporibus quia tenetur, deserunt voluptas repellat delectus
                         alias ut dolor earum ab Quia, magius. </p>
                         <button className="iBtn transparent" onClick={() => setSignUp(false)}>Sign In</button>
                </div>
                <img src={`${register}`} alt="" className="pImg" />
            </div>
        </div>
    </div>
);
};

export default SignInForm


                    
                
            



