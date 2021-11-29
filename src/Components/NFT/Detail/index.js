import React from "react"
import styles from "./details.module.css"
// import {BiArrowBack} from "react-icons/bi"
import {BsArrowUpRight} from "react-icons/bs"
import {Accordion} from "react-bootstrap"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
// import {MdCancel} from "react-icons/md"
const Details = () => {
    let navigate = useNavigate()
    const nft__detail = useSelector((state) => state.nft__detail)
    return(
        <>
        <div className={styles.details__wrapper}>
            <div className={styles.details__back}>
                <button onClick={() => navigate("/")}><span>X</span></button>
            </div>
            <div className={styles.details__head}>
                <div className={styles.details__cat}>
                    <h6>{nft__detail.cat}</h6>
                </div>
                <h1>{nft__detail.title}</h1>
                <h6>{nft__detail.nftid}</h6>
            </div>
            <div className={styles.details__info}>
                <div className={styles.details__profile}>
                    <div className={styles.details__profile__picture}></div>
                    <div className={styles.details__user__info}>
                        <p>Creater</p>
                        <h6>john_doe</h6>
                    </div>
                </div>
                <button>Send <span><BsArrowUpRight/></span></button>
            </div>
            <div className={styles.details__accords}>
                <Accordion>
                    <div className={styles.accord}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Descriptions</Accordion.Header>
                            <Accordion.Body className={styles.accord__body}>
                                <p>{nft__detail.description}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className={styles.accord}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>NFT Info</Accordion.Header>
                            <Accordion.Body className={styles.accord__body}>
                                <div className={styles.nft__info}>
                                    <p>Token ID</p>
                                    <a href="https://explorer.near.org/" target="_blank" rel="noreferrer">38493</a>
                                </div>
                                <div className={styles.nft__info}>
                                    <p>Contract Address</p>
                                    <a href="https://explorer.near.org/" target="_blank" rel="noreferrer">d0xkedek..89reke</a>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    
                </Accordion>
            </div>
        </div>
        </>
    )
}
export default Details;