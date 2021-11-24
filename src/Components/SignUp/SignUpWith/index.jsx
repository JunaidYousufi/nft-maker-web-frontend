import React from 'react'
import styles from './index.module.css'
import TextFieldComponent from '../../../Assets/FrequentlUsedComponents/TextFieldComponent';
import { IoIosArrowForward } from "react-icons/io"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const SignUpWith = () => {
    const dispatch = useDispatch()
    const loginForm = useSelector(state => state.LoginFormMethod)
    let navigate = useNavigate()
    // HANDLE CHANGE
    const handleClick = (e) => {
        dispatch({ type: e.target.value, payload: e.target.value })
    }
    // HandleLogin
    const HandleLogin = () => {
        navigate('/signin')
    }
    return (
        <div className={styles.half_container}>
            {/* EMAIL AND PHONE SIGNUP CONATINER */}
            <div className={styles.buttonContainer} onClick={handleClick}>

                <button value="email" className={`${styles.button} ${styles.secondary} ${loginForm === "email" ? styles.active : ""}`}>
                    Email

                </button>

                <button value="phone" className={`${styles.button} ${styles.secondary} ${loginForm === "phone" ? styles.active : ""}`} >
                    Phone
                </button>

            </div>

            <div className={styles.mainContainer}>
                {/* LOGIN WITH PHONE */}
                {
                    loginForm === 'phone' && <TextFieldComponent variant='outlined' placeholder='Ex. (373) 378 8383' type={'tel'} />
                }

                {/* LOGIN WITH EMAIL */}
                {
                    loginForm === 'email' && <TextFieldComponent variant='outlined' placeholder='Ex. johdoe@gmail.com' type={'email'} />



                }
                <button onClick={() => navigate("verification")} className={`${styles.button} ${styles.secondaryColor}`}>
                    Continue
                    {<span><IoIosArrowForward /></span>}
                </button>

                <p>
                    by clicking continue you must agree to near labs
                    <br />
                    <span>Terms & Conditions</span> and <span>Privacy Policy</span>
                </p>

                <hr />

                <h6 className={styles.link}>Already have Near Account?</h6>

                <button className={styles.button} onClick={HandleLogin}>
                    Login With NEAR
                    {<span><IoIosArrowForward /></span>}
                </button>
            </div>

        </div>
    );
}
export default SignUpWith;