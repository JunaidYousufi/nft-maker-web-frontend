import React,{Fragment,useState} from "react"
import {nanoid} from "nanoid"
import styles from "./sendNft.module.css"
import {useNavigate} from "react-router-dom"
import {Modal} from "react-bootstrap"
import Carousel from "react-multi-carousel";
import {IoIosArrowForward} from "react-icons/io"
import GiftAnNft from "../../GiftAnNftDialog/GiftAnNft";
import {useSelector,useDispatch} from "react-redux"
import dummy__img from "../../../Assets/Images/dummy-card1.png"
import {AiOutlineCheck} from "react-icons/ai"
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1.5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5
    }
  };
const SendNft = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [openPreview,setOpenPreview] = useState(false)
    const [openGift,setOpenGift] = useState(false)
    const [selected,setSelected] = useState("")
    // const [selected,setSelected] = useState({
    //     value:false,
    //     id:""
    // })
    // const [data,setdata] = useState(useSelector((state) => state.home__allnft))
    const sendnft__popup = useSelector((state) => state.sendnft__popup); //Defined in reducer function
    const home__allnft = useSelector((state) => state.home__allnft); //Defined in reducer function
    // let updatedNFT = useSelector((state) => state.home__allnft); //Defined in reducer function
    const closeSendNft = () => {
        dispatch({ type: "sendnft__close"})
        setOpenPreview(false)
    }
    
    const handleNftGift = () => {
        dispatch({ type: "sendnft__close"})
        setOpenGift(true)
       setOpenPreview(false)
    }
    const handleNftPreview = () => {
         dispatch({ type: "sendnft__close"})
         setOpenGift(false)
        setOpenPreview(true)
    }

    const openHistory = () => {
        closeSendNft()
        navigate("/transactions")
    }

    const nftClicked = (e, i) => {
        if(selected === i){
            setSelected("")
        }
        else{
            setSelected(i)
        }
    }

    return(
        <>
        
        {/* NFT Selection Modal */}
        <Modal
            className={`${styles.initial__nft__modal} send__nft__mobile__modal initial__modal`}
            show={sendnft__popup}
            onHide={closeSendNft}
            backdrop="static"
            // size="lg"
            keyboard={false}
        >
            <Modal.Header className={styles.modal__header__wrapper} closeButton>
            <div className="modal__title__wrapper">
                <Modal.Title>
                    <div className={styles.modal__header}>
                        <h2>Send Nft</h2>
                    </div>
                </Modal.Title>
            </div>
            </Modal.Header>
            <Modal.Body>
            <div className={styles.modal__body__wrapper}>
                <h6>Select NFT you want to send</h6>
                <div className={styles.mynft__box__wrapper}>
                    <Carousel removeArrowOnDeviceType={[
                        "tablet",
                        "mobile",
                        "desktop",
                        "superLargeDesktop",
                        ]}
                        responsive={responsive}
                        autoPlay={false}
                        infinite={false}
                        swipeable={true}
                        draggable={true}>
                        {home__allnft.map((data,i)=>{
                                return(
                                    <Fragment key={nanoid()}>
                                            <div className={`${styles.mynft__box} ${selected === i ? styles.selected__nft : ""}`} onClick={e => nftClicked(e, i)}>
                                                <div className={styles.mynft__box__image__wrapper}>
                                                    <div className={styles.mynft__box__image}>
                                                        <img src={data.image} alt={data.title}/>
                                                    </div>
                                                    <div className={styles.mynft__box__cat}>
                                                        <h6>{data.cat}</h6>
                                                    </div>
                                                </div>
                                               
                                                    {selected === i ? (
                                                        <>
                                                         <div className={styles.selected__mynft__box__description__wrapper}>
                                                            <div className={styles.mynft__box__description}>
                                                                <h2>{data.title}</h2>
                                                                <p>{data.id}</p>
                                                            </div>
                                                            <div className={styles.checked}><AiOutlineCheck/></div>
                                                         </div>
                                                        </>
                                                    ):(
                                                        <>
                                                        <div className={styles.mynft__box__description__wrapper}>
                                                            <h2>{data.title}</h2>
                                                            <p>{data.id}</p>
                                                        </div>
                                                        </>
                                                    )}
                                                    
                                                    
                                            </div>
                                        
                                    </Fragment>
                                )
                            })}
                    </Carousel>
                        
                </div>
            </div>
            <div className={styles.multiple__btn__wrapper}>
                <button onClick={handleNftPreview} className={styles.next__btn}>  {/*handleNftGift*/}
                Next
                <span>
                    <IoIosArrowForward />
                </span>
                </button>
            </div>
            </Modal.Body>
        </Modal>

        {/* NFT Sender Modal */}      
        {openGift && <GiftAnNft closebutton={true} sendGiftButton={handleNftPreview}/>}

        {/* NFT Preview Modal */}
        <Modal
            className={`${styles.initial__nft__modal} nft__final__mobile__modal initial__modal`}
            show={openPreview}
            onHide={closeSendNft}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header className={styles.modal__header__wrapper} closeButton>
            
            </Modal.Header>
            <Modal.Body>
            <div className={styles.modal__body__wrapper}>
                <div className={styles.mint__info__wrapper}>
                    <div className={styles.mint__image}>
                        <img src={dummy__img} alt="NFT Vecotry Illustartion" />
                    </div>
                    <h1>NFT Vecotry Illustartion <br/> sent successfully to</h1>
                    <h6>23 contacts</h6>
                </div>
            </div>
            <div className={`${styles.multiple__btn__wrapper} ${styles.last__modal__btn}`}>
                <button onClick={openHistory} className={styles.next__btn}>
                    Open History
                </button>
            </div>
            </Modal.Body>
        </Modal>
        </>
    )
}
export default SendNft;