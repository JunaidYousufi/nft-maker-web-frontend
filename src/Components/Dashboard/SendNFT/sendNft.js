import React,{Fragment,useState} from "react"
import {nanoid} from "nanoid"
import styles from "./sendNft.module.css"
import {Modal} from "react-bootstrap"
import Carousel from "react-multi-carousel";
import {IoIosArrowForward} from "react-icons/io"
// import GiftAnNft from "../../GiftAnNft/GiftAnNft.jsx";
import {useSelector,useDispatch} from "react-redux"
import dummy__img from "../../../Assets/Images/dummy-card1.png"
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const SendNft = () => {
    const dispatch = useDispatch()
    const [openPreview,setOpenPreview] = useState(false)
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
        
    }
    const handleNftPreview = () => {
         dispatch({ type: "sendnft__close"})
        setOpenPreview(true)
    }

    const openHistory = () => {

    }

    // const nftClicked = (id) => {
    //     // for(let i=0;i<home__allnft.length;i++){

    //     // }
    //     // const find_index_of_clicked_item = (data.findIndex(value => value.nftid === id)) //Number(value.nftid) === Number(id)
    //     // // console.log(find_index_of_clicked_item)
    //     // data[find_index_of_clicked_item] = { ...data[find_index_of_clicked_item], selected: !data[find_index_of_clicked_item].selected }
    //     // // // setdata([...data])
    //     // dispatch({type:"createnftdata__override",payload:data})
    //     // setdata(data)
    //     // console.log(data);
        
    //     setSelected({value:true,id:id})
    //     console.log(id)
    //     console.log(selected.id)
    // }

    return(
        <>
        
        {/* NFT Selection Modal */}
        <Modal
            className={`${styles.initial__nft__modal}`}
            show={sendnft__popup}
            onHide={closeSendNft}
            backdrop="static"
            size="lg"
            keyboard={false}
        >
            <Modal.Header className={styles.modal__header__wrapper} closeButton>
            <Modal.Title>
                <div className={styles.modal__header}>
                <h2>Send Nft</h2>
                </div>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className={styles.modal__body__wrapper}>
                <h6>Select NFT you want to send</h6>
                <div className={styles.mynft__box__wrapper}>
                    <Carousel responsive={responsive}>
                        {home__allnft.map((data)=>{
                                return(
                                    <Fragment key={nanoid()}>
                                            <div className={`${styles.mynft__box}`}>
                                                <div className={styles.mynft__box__image__wrapper}>
                                                    <div className={styles.mynft__box__image}>
                                                        <img src={data.image} alt={data.title}/>
                                                    </div>
                                                    <div className={styles.mynft__box__cat}>
                                                        <h6>{data.cat}</h6>
                                                    </div>
                                                </div>
                                                <div className={styles.mynft__box__description__wrapper}>
                                                    <h2>{data.title}</h2>
                                                    <p>{data.id}</p>
                                                </div>
                                            </div>
                                        
                                    </Fragment>
                                )
                            })}
                    </Carousel>
                        
                </div>
            </div>
            <div className={styles.multiple__btn__wrapper}>
                <button onClick={handleNftPreview} className={styles.next__btn}>
                Next
                <span>
                    <IoIosArrowForward />
                </span>
                </button>
            </div>
            </Modal.Body>
        </Modal>

        {/* NFT Sender Modal */}      
        {/* {sendnft__popup && <GiftAnNft/>} */}

        {/* NFT Preview Modal */}
        <Modal
            className={`${styles.initial__nft__modal}`}
            show={openPreview}
            onHide={closeSendNft}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header className={styles.modal__header__wrapper} closeButton>
            <Modal.Title>
                <div className={styles.modal__header}>
                    <h2>Send Nft</h2>
                </div>
            </Modal.Title>
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
            <div className={styles.multiple__btn__wrapper}>
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