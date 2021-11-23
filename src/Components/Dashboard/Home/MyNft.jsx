import React,{Fragment, memo,useEffect} from "react"
import {nanoid} from "nanoid"
import styles from "./Home.module.css"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router"
import PropTypes from 'prop-types';
import {AiOutlinePlus} from "react-icons/ai"
import {Row,Col} from "react-bootstrap"

import image1 from "../../../Assets/Images/dummy-card1.png"
import image2 from "../../../Assets/Images/dummy-card2.png"

import {useDispatch} from "react-redux"
const MyNft = ({isLink}) => {
    let navigate = useNavigate()
    let dispatch = useDispatch() //Direct assigning right now
    let mynft = [
        {
            image:image1,
            cat:"Digital Art",
            title:"Vecotry Illustration ",
            selected:false,
            id:"#17372",
            nftid:nanoid(),
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            image:image2,
            cat:"Digital Art",
            title:"Nature Illustration ",
            selected:false,
            id:"#3783",
            nftid:nanoid(),
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }
    ]
    useEffect(()=>{
        // mynft = [];
        dispatch({type:"getNft",payload:mynft})
    },[mynft])
    
    const handleChange = () => {
        dispatch({type:"createnft__open"})
    }
    const detailPage = (id,index) =>{
        dispatch({type:"nft__detail",payload:mynft[index]})
        navigate(`/nft/${id}`)
    }
    // const nft__data = useSelector((state)=> state.home__allnft) //Defined in reducer function

    return(
        <>
        <div className={styles.mynft__wrapper}>
            <div className={styles.mynft__header}>
                <h5>My NFTs</h5>
                {isLink ? <Link to="all-nft">See All</Link> : <button onClick={handleChange}><span><AiOutlinePlus/></span>Create More</button>}
            </div>
            <div className={styles.mynft__box__wrapper}>
                <Row>
                    {mynft.map((data,i)=>{
                        return(
                            <Fragment key={nanoid()}>
                                <Col md={3}>
                                    <div className={styles.mynft__box} onClick={() => detailPage(data.nftid,i)}>
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
                                </Col>
                                
                            </Fragment>
                        )
                    })}
                </Row>
            </div>
        </div>
        </>
    )
}
export default memo(MyNft);

MyNft.propTypes = {
    isLink: PropTypes.bool.isRequired,
};