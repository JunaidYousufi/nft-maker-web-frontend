import React,{Fragment,useEffect,useState} from "react"
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
import SearchIcon from '@material-ui/icons/Search';
import { BsCheckCircleFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import ImportGoogleContactsDialog from "../../ImportGoogleContactsDialog/ImportGoogleContactsDialog"
import axios from "axios"
import Cookies from "js-cookie"
import {googleAccess} from "../../../Utils/config"
import {toast} from "react-toastify"
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
  
const dummyContacts = [
    {
        id: 1,
        avatar: 'DR',
        name: 'Darlene Robertson',
        username: '@johndoe',
        checked: false
    },
    {
        id: 2,
        avatar: 'JJ',
        name: 'Jacob Jones',
        username: '@johndoe',
        checked: false
    },
    {
        id: 3,
        avatar: 'JW',
        name: 'Jenny Wilson',
        username: '@johndoe',
        checked: false
    },
    {
        id: 4,
        avatar: 'RR',
        name: 'Ronald Richards',
        username: '@johndoe',
        checked: false
    },
    {
        id: 5,
        avatar: 'CW',
        name: 'Cameron Williamson',
        username: '@johndoe',
        checked: false
    },
    {
        id: 6,
        avatar: 'DS',
        name: 'Darrell Steward',
        username: '@johndoe',
        checked: false
    },

]
const SendNft = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const giftNFT__contactData = useSelector((state) => state.giftNFT__contactData)
    // const [data, setdata] = useState(dummyContacts)
    const [filteredData,setFilteredData] = useState(giftNFT__contactData ? giftNFT__contactData : [])
    const [details,setDetails] = useState({
        search:""
    })
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
    const [checkedState, setCheckedState] = useState(
        new Array(giftNFT__contactData.length).fill(true)
    );
        // for checked and unchecked items
        const HandleClick = (position) => {
            // const find_index_of_clicked_item = (data.findIndex(value => Number(value.id) === Number(id)))
            // data[find_index_of_clicked_item] = { ...data[find_index_of_clicked_item], checked: !data[find_index_of_clicked_item].checked }
            // setdata([...data])
            const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
          );
          setCheckedState(updatedCheckedState);
        }
    const closegiftNft = () => {
        setOpenGift(false)
    }
    const handleNftGift = () => {
        dispatch({ type: "sendnft__close"})
        setOpenGift(true)
       setOpenPreview(false)
    }
    const handleNftPreview = () => {
         dispatch({ type: "sendnft__close"})
         dispatch({ type: "close_dialog_gift_nft"})
         setOpenGift(false)
        setOpenPreview(true)
    }
    const openInitialSendNft = () => {
        dispatch({ type: "sendnft__open"})
        setOpenGift(false)
        setOpenPreview(false)
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
    useEffect(()=>{
        dispatch({ type: "close_dialog_gift_nft"})
    },[])

    const handleSearch = (event) =>{
        let value = event.target.value.toLowerCase();
        let result = [];
        
        result = giftNFT__contactData.filter((data) => {
            return data.names[0].displayName.toLowerCase().search(value) !== -1;
        });
        setFilteredData(result);
    }
    const [importContactDialog, setimportContactDialog] = useState(false)
    const HandleDialogClose = () => {
        setimportContactDialog(false)
    }
    const importGoogleContact =  () => {
        axios
        .get(`https://content-people.googleapis.com/v1/people/me/connections?personFields=names,photos`, {
            headers: {
              Authorization: 'Bearer ' + Cookies.get(googleAccess) 
            }
        })
        .then((response)=>{
            if(response.status===200){
                setFilteredData(response.data.connections)
                dispatch({type:"getGoogleContactData",payload:response.data.connections})
                setCheckedState(new Array(response.data.connections.length).fill(true))
                setimportContactDialog(false)
            }
        })
        .catch(()=>{
            toast.error("Something Went Wrong Fetching Contacts From Google")
        })
    }
    const HandleDialogOpen = () => {
        setimportContactDialog(true)

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
            centered
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
                <button onClick={handleNftGift} className={styles.next__btn}>  {/*handleNftGift*/}
                Next
                <span>
                    <IoIosArrowForward />
                </span>
                </button>
            </div>
            </Modal.Body>
        </Modal>
        
        <ImportGoogleContactsDialog onImport={importGoogleContact} status={importContactDialog} callback={HandleDialogClose} />
        {/* NFT Sender Modal */}              
        {/* {openGift && <GiftAnNft dashboard={true} closebutton={true} sendGiftButton={handleNftPreview}/>} */}
        <Modal
            className={`${styles.initial__nft__modal} send__nft__mobile__modal initial__modal`}
            show={openGift}
            onHide={closegiftNft}
            backdrop="static"
            size="lg"
            centered
            keyboard={false}
        >
            <Modal.Header className={styles.modal__header__wrapper} closeButton>
                <div className="modal__multiple__wrapper">
                    <button
                        onClick={openInitialSendNft}
                        className="back__btn"
                    >
                    Back
                    </button>
                    <Modal.Title>
                    <div className={styles.modal__header}>
                        <h2>Send Nft</h2>
                    </div>
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
            <div className={styles.modal__body__wrapper}>
                <div className={styles.search__wrapper}>
                    <div className={styles.search__inner__wrapper}>

                        <div className={styles.search__input}>
                        <div className={styles.searchIcon}>
                            <SearchIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Search People"
                            onChange={handleSearch}   
                        />
                        </div>
                    </div>
                    <button onClick={HandleDialogOpen}>Import</button>
                    
                </div>
                <div className={styles.data__wrapper}>
                        {
                            filteredData.map((value,index) => (
                                <div className={styles.data_row_container} key={nanoid()}>

                                    {/* AVATAR */}
                                    <div className={styles.avatar}>
                                        <img src={value.photos[0].url} alt={value.names[0].displayName}/>
                                    </div>
                                    {/* TEXT */}
                                    <div className={styles.textContainer}>
                                        <h6>{value.names[0].displayName}</h6>
                                        <p>@{value.names[0].givenName}</p>
                                    </div>
                                    {/* ICONS */}
                                    <div className={styles.icon} onClick={() => HandleClick(index)}>
                                        {checkedState[index] ? <BsCheckCircleFill className={styles.checked} /> : <GoPrimitiveDot className={styles.unchecked} />}
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
            <div className={styles.multiple__btn__wrapper}>
                <button onClick={handleNftPreview} className={styles.next__btn}>
                Send Gift
                <span>
                    <IoIosArrowForward />
                </span>
                </button>
            </div>
            </Modal.Body>
        </Modal>


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