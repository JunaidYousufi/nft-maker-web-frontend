import React,{memo} from "react"
import styles from "./Home.module.css"
import {Container} from "react-bootstrap"
import {IoIosArrowForward} from "react-icons/io"
import CustomButton from "../../../Assets/FrequentlyUsedComponents/Button"

import create_nft_left from "../../../Assets/Images/create-nft-left.png"
import create_nft_right from "../../../Assets/Images/create-nft-right.png"
import user_icon from "../../../Assets/Images/user-icon.png"

import MyNFT from "./MyNft";
import Transactions from "./Transactions";

const Home = () => {
    return(
        <>
        <div className={styles.home__main__wrapper}>
            <Container>
                {/* Home Header  */}
                <div className={styles.home__header}>
                    <div className={styles.user__icon}>
                        <img src={user_icon} alt="User Name"/>
                        <h6>john.near</h6>
                    </div>
                </div>

                {/* Home Create NFT Container */}
                <div className={styles.create__nft__container}>
                    <div className={styles.create__nft__content}>
                        <div>
                            <h1>Start Creating Your <strong>NFTs</strong> Today</h1>
                            <div className={styles.btn__wrapper}>
                                <CustomButton text={"Start Creating your NFTs Today"} icon={<IoIosArrowForward/>}/>
                            </div>
                        </div>
                    </div>
                    <img src={create_nft_left} className={styles.create_nft_left} alt="Create NFT"/>
                    <img src={create_nft_right} alt="Create NFT" className={styles.create_nft_right}/>
                </div>
                
                <MyNFT/>
                <Transactions/>
                
            </Container>
        </div>
        </>
    )
}
export default memo(Home);