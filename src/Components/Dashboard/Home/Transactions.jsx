import React,{memo,Fragment} from "react"
import styles from "./Home.module.css"
import {Link} from "react-router-dom"
import {nanoid} from "nanoid"
const Transactions = () => {
    const transaction = [
        {
            image:"",
            cat:"Digital Art",
            title:"",
            id:"",
        }
    ]
    return(
        <>
        <div className={styles.transaction__wrapper}>
            <div className={styles.transaction__header}>
                <h5>Recent Transactions</h5>
                <Link to="/all-transactions">See All</Link>
            </div>
            <div className={styles.transaction__list__wrapper}>
                {transaction.map((data)=>{
                    return(
                        <Fragment key={nanoid}>
                            <div className={styles.transaction__list}>
                                
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default memo(Transactions);