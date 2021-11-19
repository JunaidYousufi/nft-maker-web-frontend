import React,{memo,Fragment,useState} from "react"
import styles from "./transactions.module.css"
import {Link} from "react-router-dom"
import {nanoid} from "nanoid"
import {BsArrowUpRight,BsArrowDownLeft} from "react-icons/bs"
const TransactionHistory = () => {
    const [tabs,setTabs] = useState("all")
    const alltransactions = [
        {
            transaction:"sent",
            id:"#17372",
            name:"michael.near",
            time:"3 days ago",
        },
        {
            transaction:"received",
            id:"#8982",
            name:"0x748....4d849",
            time:"3 days ago",
        },
        {
            transaction:"sent",
            id:"#17372",
            name:"jordan.near",
            time:"3 days ago",
        },
        {
            transaction:"received",
            id:"#8982",
            name:"0x748....4d849",
            time:"3 days ago",
        },
        {
            transaction:"sent",
            id:"#17372",
            name:"michael.near",
            time:"3 days ago",
        },
    ]

    const handleTabClick = (e) =>{
        setTabs(e.target.value)
    }
    return(
        <>
        <div className={styles.transaction__wrapper}>
            <div className={styles.transaction__header}>
                <h5>History</h5>
                <div className={styles.transaction__tab} onClick={handleTabClick}>
                    <button className={tabs === "all" ? styles.active : ""} value="all">All</button>
                    <button className={tabs === "sent" ? styles.active : ""} value="sent">Sent</button>
                    <button className={tabs === "received" ? styles.active : ""} value="received">Received</button>
                </div>
                <Link to="send-nft"><span><BsArrowUpRight/></span>Send NFT</Link>
            </div>
            <div className={styles.transaction__list__wrapper}>
                {alltransactions
                .filter((data)=> tabs === "sent" ? data.transaction==="sent" : tabs==="received" ? data.transaction==="received" : data)
                .map((data)=>{
                    return(
                        <Fragment key={nanoid()}>
                            <div className={styles.transaction__list}>
                                <div className={styles.transaction__action}>
                                    <div>{data.transaction === "sent" ? <BsArrowUpRight/> : <BsArrowDownLeft/>}</div>
                                    <h6><span>{data.id}</span> {data.transaction === "sent" ? "Sent to" : "Received from"} <span>{data.name}</span></h6>
                                </div>
                                <div className={styles.transaction__time}>
                                    <p>{data.time}</p>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default memo(TransactionHistory);