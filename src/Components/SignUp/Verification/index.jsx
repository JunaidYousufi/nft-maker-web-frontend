import React from 'react'
import styles from './index.module.css'
import { IoIosArrowForward } from "react-icons/io"
import VerificationInput from "react-verification-input";
import { Link } from '@material-ui/core';
import './verificationCode.css'
import { useSelector } from 'react-redux';
import { cookieAuth } from '../../../Utils/config';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Verification = () => {
    const loginMethodUsedByUser = useSelector(state => state.LoginFormMethod)
    let navigate = useNavigate()
    const tempLogIn = () => {
        Cookies.set(cookieAuth, 'cookie')
        navigate("/")
        toast.success("Logged In Successfully")
    }
    return (
        <div className={styles.half_container}>
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
                    <h4>Enter Verification Code</h4>
                    <VerificationInput
                        autoFocus={true}
                        classNames={{
                            character: "character",
                            characterSelected: "character--selected",
                        }}
                    />

                </div>

                <button className={`${styles.button} ${styles.secondaryColor}`} onClick={()=>tempLogIn()}>
                    Continue
                    {<span><IoIosArrowForward /></span>}
                </button>

                <hr />

                <h4>Didn't receive your code?</h4>

                <Link className={styles.link}>Send to a different phone number</Link>

                <Link className={styles.link}>Resend your code</Link>
            </div>
        </div >
    );
}
export default Verification;