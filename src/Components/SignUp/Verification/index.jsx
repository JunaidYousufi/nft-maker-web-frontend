import React from 'react'
import styles from './index.module.css'
import { IoIosArrowForward } from "react-icons/io"
import VerificationInput from "react-verification-input";
import { useSelector } from 'react-redux';
import { cookieAuth } from '../../../Utils/config';
import Cookies from 'js-cookie'
import { useNavigate, Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";


// import { toast } from 'react-toastify';
const Verification = () => {
    const loginMethodUsedByUser = useSelector(state => state.LoginFormMethod)
    let navigate = useNavigate()
    const tempLogIn = () => {
        Cookies.set(cookieAuth, 'cookie')
        navigate("/signup/create-account")
    }
    // HandleClick for cancel button
    const HandleClick = () => {
        navigate("/signup")

    }
    return (
        <div className={styles.half_container}>
            <AiFillCloseCircle className={styles.cross} onClick={HandleClick} />
            <span className={styles.verification}>Verification</span>
            <div className={styles.childContainer}>
                <p>We've sent a 6-digit verification code to<br />
                    your email address
                </p>
                {
                    loginMethodUsedByUser === 'email' && <h2>johndoe@gmail.com</h2>
                }
                {
                    loginMethodUsedByUser === 'phone' && <h2> + 1(373) 383 9933</h2>
                }


                <div className={styles.verficationContainer}>
                    <p className={styles.enterCode}>Enter Verification Code</p>
                    <VerificationInput
                        autoFocus={true}
                        placeholder=' '
                        classNames={{
                            container: "verification__container",
                            character: "character",
                            characterSelected: "character--selected",
                        }}
                    />

                </div>

                <button className={`${styles.button} ${styles.secondaryColor}`} onClick={() => tempLogIn()}>
                    Continue
                    {<span><IoIosArrowForward /></span>}
                </button>

                <hr />

                <h4>Didn't receive your code?</h4>

                <Link to='/signup' className={styles.link}>Send to a different phone number</Link>

                <Link to='.' className={styles.link}>Resend your code</Link>
            </div>
        </div >
    );
}
export default Verification;