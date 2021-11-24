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
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '20px 30px',
        height: '95vh !important',
        position: 'relative',
        overflow:'hidden',
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
        top: '60px',
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function GiftAnNft({ closebutton, sendGiftButton }) {
    let navigate = useNavigate();
    const classes = useStyles();
    const [data, setdata] = useState(dummyContacts)
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
        <div>
            <Dialog
                open={dialogStatus}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={true}
                maxWidth={'sm'}
                PaperProps={{
                    style: { borderRadius: 20 },
                }}
            >
                <div className={classes.mainContainer}>
                    {closebutton ?
                        <AiFillCloseCircle className={styles.cross} onClick={handleClose} />
                        : null
                    }
                    <h4>Gift an NFT</h4>
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
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <p onClick={HandleDialogOpen}>Import</p>
                    </div>

                    {/* DATA */}
                    <div className={styles.dataContainer}>
                        {
                            data.map((value) => (
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
                        <p>Share App <span><FaRegShareSquare /></span></p>
                    </div>
                </div>

            </Dialog>
            {/* this dialog will open when import button is clicked */}
            <ImportGoogleContactsDialog status={importContactDialog} callback={HandleDialogClose} />
        </div>
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