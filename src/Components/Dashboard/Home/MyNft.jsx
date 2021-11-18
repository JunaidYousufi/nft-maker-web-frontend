import React,{Fragment, memo} from "react"
import {nanoid} from "nanoid"
import styles from "./Home.module.css"
import {Link} from "react-router-dom"

import {Row,Col} from "react-bootstrap"

import image1 from "../../../Assets/Images/dummy-card1.png"
import image2 from "../../../Assets/Images/dummy-card2.png"

const MyNft = () => {
    const mynft = [
        {
            image:image1,
            cat:"Digital Art",
            title:"Vecotry Illustration ",
            id:"#17372",
        },
        {
            image:image2,
            cat:"Digital Art",
            title:"Nature Illustration ",
            id:"#3783",
        }
    ]
    return(
        <>
        <div className={styles.mynft__wrapper}>
            <div className={styles.mynft__header}>
                <h5>My NFTs</h5>
                <Link to="/all-nft">See All</Link>
            </div>
            <div className={styles.mynft__box__wrapper}>
                <Row>
                    {mynft.map((data)=>{
                        return(
                            <Fragment key={nanoid}>
                                <Col md={3}>
                                    <div className={styles.mynft__box}>
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