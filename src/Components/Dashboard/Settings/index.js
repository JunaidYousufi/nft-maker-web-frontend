import React,{useState} from "react"
import styles from "./settings.module.css"
import SettingsHeader from "./SettingsHeader"
import {IoIosArrowForward} from "react-icons/io"
import {AiOutlineCheck} from "react-icons/ai"
import user_icon from "../../../Assets/Images/user-icon.png"
import {Container,Row,Col,Modal} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
const Settings = () => {
    const navigate = useNavigate()
    const [connectedModal,setConnectedModal] = useState(false)
    const [checked,setChecked] = useState(0)
    const closeConnectedModal = () => {
        setConnectedModal(false)
    }
    const openConnectedModal = () => {
        setConnectedModal(true)
    }
    const addNewWallet = () => {
        navigate("/signup/create-account")
    }
    const check = (i) =>{
        if(checked!==i){
            setChecked(i)
            setConnectedModal(false)
        }
        
    }
    return(
        <>
        <SettingsHeader/>

        <div className={styles.settings__wrapper}>
            <Container>
                
                <div className={styles.settings__acc__wrapper}>
                    <Row>
                        {/* Acc#01 */}
                        <Col md={{span:8,offset:2}}>
                            <div className={styles.settings__acc__inner}>
                                <h5>Connected Wallet</h5>
                                <div className={styles.settings__acc}>
                                    <div className={styles.settings__name__info}>
                                        <img src={user_icon} alt="User Name" />
                                        <h6>john.near</h6>
                                    </div>
                                    <button onClick={openConnectedModal}><IoIosArrowForward/></button>
                                </div>
                            </div>
                        </Col>
                        {/* Acc#02 */}
                        <Col md={{span:8,offset:2}}>
                            <div className={styles.settings__acc__inner}>
                                <h5>Profile Settings</h5>
                                <div className={styles.settings__acc}>
                                    <div style={{width:"100%"}}>
                                        <div className={styles.settings__acc__content}>
                                            <div className={styles.personal__settings}>
                                                <p>Name</p>
                                                <h6>John Doe</h6>
                                            </div>
                                            <button><IoIosArrowForward/></button>
                                        </div>
                                        <div className={styles.settings__acc__content}>
                                            <div className={styles.personal__settings}>
                                                <p>Email Address</p>
                                                <h6>johndoe@gmail.com</h6>
                                            </div>
                                            <button><IoIosArrowForward/></button>
                                        </div>
                                        <div className={styles.settings__acc__content}>
                                            <div className={styles.personal__settings}>
                                                <p>Phone number</p>
                                                <h6>+1 748 485 9495</h6>
                                            </div>
                                            <button><IoIosArrowForward/></button>
                                        </div>
                                    </div>                
                                </div>
                            </div>
                        </Col>
                        {/* Acc#03 */}
                        <Col md={{span:8,offset:2}}>
                            <div className={styles.settings__acc__inner}>
                                <h5>Security</h5>
                                <div className={styles.settings__acc}>
                                    <div className={styles.settings__name__info}>
                                        <h6>Add 2FA authentication</h6>
                                    </div>
                                    <button><IoIosArrowForward/></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

        <Modal
            className={`${styles.connection__modal} initial__modal`}
            show={connectedModal}
            onHide={closeConnectedModal}
            backdrop="static"
            centered
            keyboard={false}
        >
            <Modal.Header className={styles.modal__header__wrapper} closeButton>
            <div className="modal__title__wrapper">
                <Modal.Title>
                    <div className={styles.modal__header}>
                        <h2>Select Connected Wrapper</h2>
                    </div>
                </Modal.Title>
            </div>
            </Modal.Header>
            <Modal.Body>
                <div className={styles.modal__body__wrapper}>
                    <div className={styles.name__wrapper} onClick={() => check(0)}>
                        <h6>johndoe.near</h6>
                        {checked === 0 && <div className={styles.checked}><AiOutlineCheck/></div>}
                    </div>
                    <div className={styles.name__wrapper} onClick={() => check(1)}>
                        <h6>demo.near</h6>
                        {checked === 1 && <div className={styles.checked}><AiOutlineCheck/></div>}
                    </div>
                </div>
                <div className={styles.btn__wrapper}>
                    <button onClick={addNewWallet} className={styles.next__btn}> 
                        Add New Wallet
                    </button>
                </div>
            </Modal.Body>
        </Modal>
        </div>
        </>
    )
}
export default Settings;