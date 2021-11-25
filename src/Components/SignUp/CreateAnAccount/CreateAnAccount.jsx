import React, { useState } from 'react'
import styles from './CreateAnAccount.module.css'
import { IoIosArrowForward } from "react-icons/io"
import TextFieldComponent from '../../../Assets/FrequentlUsedComponents/TextFieldComponent';
import { useNavigate } from "react-router-dom"
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { BsInfoCircleFill } from "react-icons/bs";



const CreateAnAccount = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [info, setinfo] = useState('')
    const createAccount = () => {
        navigate("/signup/gift-nft")
        dispatch({ type: 'open_dialog_gift_nft' })
    }
    // HandleClick for cancel button
    const HandleClick = () => {
        navigate("/signup")

    }

    // HandleLogin
    const HandleLogin = () => {
        navigate('/signin')
    }

    // HandleFocus for input 
    const HandleFocus = (ClickedInput) => {
        console.log('i m focused', ClickedInput)
        setinfo(ClickedInput)
    }

    return (
        <div className={styles.half_container}>
            <AiFillCloseCircle className={styles.cross} onClick={HandleClick} />
            <span className={styles.createAnAccount}>Create an NFT account</span>

            <div className={styles.childContainer}>
                <p className={styles.left}>Enter an Account ID to use with your NEAR <br />
                    account. Your Account ID will be used for all NEAR <br />
                    operations, including sending and receiving <br />
                    assets.
                </p>

                {/* input field for full name */}
                <div className={styles.textField}>
                    {info === 'name' ? <BsInfoCircleFill className={styles.infoIcon} /> : null}
                    <TextFieldComponent
                        label="FULL NAME"
                        variant='outlined'
                        placeholder='Ex John Doe'
                        type='text'
                        HandleFocus={() => HandleFocus('name')}
                    />
                </div>

                {/* input field for account id */}
                <div className={styles.textField}>
                    {info === 'id' ? <BsInfoCircleFill className={styles.infoIcon} /> : null}
                    <TextFieldComponent
                        label='ACCOUNT ID'
                        variant='outlined'
                        placeholder='yourname.near'
                        type='text'
                        HandleFocus={() => HandleFocus('id')}

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

                <button className={styles.primary_button} onClick={HandleLogin}>
                    Login With NEAR
                    {<span><IoIosArrowForward /></span>}
                </button>
            </div>
        </div>
    );
}

export default CreateAnAccount;