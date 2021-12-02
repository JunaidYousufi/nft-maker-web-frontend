import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import styles from './GiftAnNft.module.css'
import { GoPrimitiveDot } from "react-icons/go";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io"
import { FaRegShareSquare } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import ImportGoogleContactsDialog from '../ImportGoogleContactsDialog/ImportGoogleContactsDialog';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function GiftAnNft({ closebutton, sendGiftButton,dashboard }) {
    const useStyles = makeStyles((theme) => ({
        mainContainer: {
            margin: '30px auto',
            padding: '25px 30px',
            height: `${dashboard ? '80vh' : '100%'}`,
            maxWidth: '600px',
            position: 'relative',
            background: '#FFFFFF',
            borderRadius: '20px',
            [theme.breakpoints.down('md')]: {
                // position: 'absolute',
                // top: '5vh',
                // maxWidth: '100%',
                // minHeight: '95vh',
                // marginLeft: '0',
                // right: '0',
                // left: '0',
                // bottom: '0',
                // borderRadius: '0px',
                // borderTopRightRadius: '30px',
                // borderTopLeftRadius: '30px',
            },
    
            // overflow:'hidden',
            "& h4": {
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '21px',
                textAlign: 'center',
                marginBottom: '20px'
            }
        },
        childContainer: {
            display: 'flex',
            "& p": {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '20.4px',
                letterSpacing: '-0.4896px',
                color: '#2F80ED',
                marginRight: '10px',
                marginLeft: '20px',
                marginTop: '5px',
                cursor: 'pointer'
            }
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            top: '85px',
            justifyContent: 'center',
            color: '#818C99',
            zIndex: 20,
        },
        inputInput: {
            padding: '15px',
            background: '#EBEDF0',
            borderRadius: '12px',
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            maxWidth: '400px',
            zIndex: 1
    
        },
    }));
    let navigate = useNavigate();
    const classes = useStyles();
    const [data, setdata] = useState(dummyContacts)
    const [filteredData,setFilteredData] = useState(dummyContacts)

    const handleSearch = (event) =>{
        let value = event.target.value.toLowerCase();
        let result = [];
        
        result = data.filter((data) => {
            return data.name.toLowerCase().search(value) !== -1;
        });
        setFilteredData(result);
    }
    const [importContactDialog, setimportContactDialog] = useState(true)
    const dialogStatus = useSelector(state => state.GiftNFT_Dialog_Box)
    const dispatch = useDispatch()

    // for checked and unchecked items
    const HandleClick = (id) => {
        const find_index_of_clicked_item = (data.findIndex(value => Number(value.id) === Number(id)))
        data[find_index_of_clicked_item] = { ...data[find_index_of_clicked_item], checked: !data[find_index_of_clicked_item].checked }
        setdata([...data])
    }

    // this is for main dialog box
    const handleClose = () => {
        dispatch({ type: 'close_dialog_gift_nft' })
        navigate(`/`);
    }

    // this dialog is for import google contacts
    const HandleDialogClose = () => {
        setimportContactDialog(false)
    }
    const HandleDialogOpen = () => {
        setimportContactDialog(true)

    }

    useEffect(() => {
        dispatch({ type: 'open_dialog_gift_nft' })

    }, [])

    return (
        <>
            <div className={classes.mainContainer}>
                <div>
                    <div>
                        {closebutton ?
                            <AiFillCloseCircle className={styles.cross} onClick={handleClose} />
                            : null
                        }
                        <h4>Gift an NFT</h4>
                    </div>
                    
                    {/* SEARCH BAR */}
                    <div className={classes.childContainer} >
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search People"
                            fullWidth
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onChange={handleSearch}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <p onClick={HandleDialogOpen}>Import</p>
                    </div>

                    {/* DATA */}
                    <div className={`${dashboard ? styles.dashboardContainer : styles.dataContainer}`}>
                        {
                            filteredData.map((value) => (
                                <div className={styles.data_row_container} key={value.id}>

                                    {/* AVATAR */}
                                    <div className={styles.avatar}>
                                        {value.avatar}
                                    </div>
                                    {/* TEXT */}
                                    <div className={styles.textContainer}>
                                        <h6>{value.name}</h6>
                                        <p>{value.username}</p>
                                    </div>
                                    {/* ICONS */}
                                    <div className={styles.icon} onClick={() => HandleClick(value.id)}>
                                        {value.checked ? <BsCheckCircleFill className={styles.checked} /> : <GoPrimitiveDot className={styles.unchecked} />}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.footer}>
                        <button className={styles.primary_button} onClick={sendGiftButton}>
                            Send Gift
                            {<span><IoIosArrowForward /></span>}
                        </button>
                        {!dashboard && <p>Share App <span><FaRegShareSquare /></span></p>}
                    </div>
                </div>
                
            </div>

            {/* this dialog will open when import button is clicked */}
            {!dashboard && <ImportGoogleContactsDialog status={importContactDialog} callback={HandleDialogClose} />}
        </>
    );
}

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

GiftAnNft.propTypes = {
    sendGiftButton: PropTypes.func.isRequired
}