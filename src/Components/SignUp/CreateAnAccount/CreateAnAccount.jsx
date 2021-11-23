import React from 'react'
import styles from './CreateAnAccount.module.css'
import { IoIosArrowForward } from "react-icons/io"
import TextFieldComponent from '../../../Assets/FrequentlUsedComponents/TextFieldComponent';
import {useNavigate} from "react-router-dom"

const CreateAnAccount = () => {
    let navigate = useNavigate()
    const createAccount = () => {
        navigate("/signup/gift-nft")
    }
    return (
        <div className={styles.half_container}>
            <span className={styles.createAnAccount}>Create an NFT account</span>

            <div className={styles.childContainer}>
                <p className={styles.left}>Enter an Account ID to use with your NEAR <br />
                    account. Your Account ID will be used for all NEAR <br />
                    operations, including sending and receiving <br />
                    assets.
                </p>

                {/* input field for full name */}
                <div className={styles.textField}>
                    <h6>FULL NAME</h6>
                    <TextFieldComponent
                        variant='outlined'
                        placeholder='Ex John Doe'
                        type='text'
                    />
                </div>

                {/* input field for account id */}
                <div className={styles.textField}>
                    <h6>ACCOUNT ID</h6>
                    <TextFieldComponent
                        variant='outlined'
                        placeholder='yourname.near'
                        type='text'
                    />
                </div>

                {/* create account button */}
                <button onClick={createAccount} className={`${styles.secondary_button}`} >
                    Create an account
                    {<span><IoIosArrowForward /></span>}
                </button>


                <p>By creating a NEAR account, you agree to the <br />
                    NEAR Wallet <span>Terms of Service</span> and <span>Privacy Policy</span>.
                </p>

                <h6 className={styles.link}>Already have Near Account?</h6>

                <button className={styles.primary_button}>
                    Login With NEAR
                    {<span><IoIosArrowForward /></span>}
                </button>
            </div>
        </div>
    );
}

export default CreateAnAccount;