import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Modal, ProgressBar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import styles from "./createNft.module.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateType
);

const CreateNft = () => {
  let navigate = useNavigate();
  const [image, setImage] = useState({
    files: "",
  });
  const [details, setDetails] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [formValues, setFormValues] = useState([
    {
      [`size_12345`]: "",
      [`extension_12345`]: "",
      id: "12345",
    },
  ]);

  const formInfo = {
    ...image,
    ...details,
    ...formValues,
  };

  let handleChange = (id, clikedInput) => (e) => {
    // console.log(id, clikedInput);
    const get_index = formValues.findIndex((value) => value.id == id);
    console.log("cliked item", get_index);
    formValues[get_index] = {
      ...formValues[get_index],
      [`${clikedInput}_${id}`]: e.target.value,
    };
    setFormValues([...formValues]);
  };

  let addFormFields = () => {
    const id = nanoid();
    setFormValues([
      ...formValues,
      // generating unique keys for each object
      {
        [`size_${id}`]: "",
        [`extension_${id}`]: "",
        id: id,
      },
    ]);
  };

  //   let removeFormFields = (i) => {
  //     let newFormValues = [...formValues];
  //     newFormValues.splice(i, 1);
  //     setFormValues(newFormValues);
  //   };

  const dispatch = useDispatch();
  const createnft__popup = useSelector((state) => state.createnft__popup); //Defined in reducer function

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setDetails((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  //Rest Of the Modals
  const [nftForm, setNftForm] = useState(false);
  const [nftPreview, setNftPreview] = useState(false);
  const [nftMint, setNftMint] = useState(false);

  const handleNftForm = () => {
    dispatch({ type: "createnft__close" });
    setNftForm(true);
    setNftPreview(false);
    setNftMint(false);
  };
  const handleNftPreview = () => {
    dispatch({ type: "createnft__close" });
    setNftForm(false);
    setNftPreview(true);
    setNftMint(false);
  };

  const handleNftMint = () => {
    dispatch({ type: "createnft__close" });
    setNftForm(false);
    setNftPreview(false);
    setNftMint(true);
  };
  const goBack = (modalName) => {
    if (modalName === "initalForm") {
      dispatch({ type: "createnft__open" });
      setNftForm(false);
      setNftPreview(false);
      setNftMint(false);
    } else if (modalName === "nftForm") {
      dispatch({ type: "createnft__close" });
      setNftForm(true);
      setNftPreview(false);
      setNftMint(false);
    }
  };

  const openNftDesc = () => {
    navigate("/nft-details");
  };

  return (
    <>
      {/* Initial Modal  */}
      <Modal
        className={styles.initial__nft__modal}
        show={createnft__popup}
        onHide={() => dispatch({ type: "createnft__close" })}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className={styles.modal__header__wrapper} closeButton>
          <Modal.Title>
            <div className={styles.modal__header}>
              <h2>Create An Nft</h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className={styles.progress}>
          <ProgressBar now={(1 / 3) * 100} />
        </div>
        <Modal.Body>
          <div className={styles.modal__body__wrapper}>
            <h3>Upload Files</h3>
            {/* For Multiple Images */}
            {/* <FilePond
                    type="file"
                    className="file filepond--file-wrapper"
                    name="pic"
                    allowFileEncode={true}
                    acceptedFileTypes={['image/png','image/jpg','image/jpeg']}
                    fileValidateTypeDetectType={(source, type) => new Promise((resolve, reject) => {
                        resolve(type);
                    })
                    }
                    allowRemove={true}
                    beforeRemoveFile = {item => {
                        for( let i = 0; i < details.images.length; i++){ 
                            if ( details.images[i] === item.getFileEncodeDataURL()) { 
                                details.images.splice(i, 1); 
                            }
                        }
                    }}  
                    onpreparefile= {item => {
                        details.images.push(item.getFileEncodeDataURL())
                        setDetails({
                            images:details.images
                        })
                    }}
                    allowMultiple={true}
                    maxFiles={6}
                    id={1}
                    labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                    required={true}
                    
                /> */}
            <FilePond
              type="file"
              className="file filepond--file-wrapper"
              name="pic"
              allowFileEncode={true}
              acceptedFileTypes={["image/png", "image/jpg", "image/jpeg"]}
              fileValidateTypeDetectType={(source, type) =>
                new Promise((resolve, reject) => {
                  resolve(type);
                })
              }
              allowRemove={true}
              beforeRemoveFile={() => {
                image.files = "";
              }}
              onpreparefile={(item) => {
                setImage({
                  files: item.getFileEncodeDataURL(),
                });
              }}
              multiple={false}
              required
              id={1}
              labelIdle='Drag & Drop an Image or <span className="filepond--label-action">Browse</span>'
            />
          </div>
          <div className={styles.next__btn__wrapper}>
            <button onClick={handleNftForm} className={styles.next__btn}>
              Next
              <span>
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* NFT Form Modal */}
      <Modal
        className={`${styles.initial__nft__modal} ${styles.nft__form__modal}`}
        show={nftForm}
        onHide={() => setNftForm(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className={styles.modal__header__wrapper} closeButton>
          <Modal.Title>
            <div className={styles.modal__header}>
              <h2>Create An Nft</h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className={styles.progress}>
          <ProgressBar now={(2 / 3) * 100} />
        </div>
        <Modal.Body>
          <div className={styles.modal__body__wrapper}>
            <form>
              <div className={styles.form__group}>
                <label>TITLE</label>
                <input
                  type="text"
                  name="title"
                  value={details.title}
                  onChange={inputEvent}
                  placeholder="Ex. Redeemable Art"
                  required
                />
              </div>
              <div className={styles.form__group}>
                <label>DESCRIPTION</label>
                <textarea
                  rows={5}
                  name="description"
                  value={details.description}
                  onChange={inputEvent}
                  placeholder="Ex. Redeemable Art"
                  required
                />
              </div>
              <div className={styles.form__group}>
                <label>PROPERTIES</label>
                {formValues.map((val, index) => (
                  <div className={styles.form__group__inner} key={index}>
                    <input
                      type="text"
                      value={val[`size_${val.id}`]}
                      placeholder="Ex. Size"
                      onChange={handleChange(val.id, "size")}
                    />

                    <input
                      type="text"
                      value={val[`extension_${val.id}`]}
                      placeholder="Ex. 40"
                      onChange={handleChange(val.id, "extension")}
                    />

                    {/* {
                                    index ? 
                                    <button type="button" className={`button remove`} onClick={() => removeFormFields(index)}>Remove</button> 
                                    :null
                                } */}
                  </div>
                ))}
                <button
                  className={styles.addFieldsBtn}
                  type="button"
                  onClick={() => addFormFields()}
                >
                  <span>
                    <AiOutlinePlus />
                  </span>
                  Add Fields{" "}
                </button>
              </div>
              <div className={styles.form__group}>
                <label>CATEGORY</label>
                <select
                  name="category"
                  value={details.category}
                  onChange={inputEvent}
                >
                  <option></option>
                  <option value="Digital Arts">Digital Arts</option>
                </select>
              </div>
            </form>
          </div>
          <div className={styles.multiple__btn__wrapper}>
            <button
              onClick={() => goBack("initalForm")}
              className={styles.back__btn}
            >
              <span>
                <IoIosArrowBack />
              </span>
              Back
            </button>
            <button onClick={handleNftPreview} className={styles.next__btn}>
              Next
              <span>
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* NFT Preview Modal */}
      <Modal
        className={`${styles.initial__nft__modal} ${styles.nft__form__modal}`}
        show={nftPreview}
        onHide={() => setNftPreview(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className={styles.modal__header__wrapper} closeButton>
          <Modal.Title>
            <div className={styles.modal__header}>
              <h2>Create An Nft</h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className={styles.progress}>
          <ProgressBar now={(2.9 / 3) * 100} />
        </div>
        <Modal.Body>
          <div className={styles.modal__body__wrapper}>
            <h6>Preview</h6>
            <div className={styles.mynft__box}>
              <div className={styles.mynft__box__image__wrapper}>
                <div className={styles.mynft__box__image}>
                  <img src={formInfo.files} alt={formInfo.title} />
                </div>
                <div className={styles.mynft__box__cat}>
                  <h6>{formInfo.category}</h6>
                </div>
              </div>
              <div className={styles.mynft__box__description__wrapper}>
                <h2>{formInfo.title}</h2>
                <p>#17372</p>
              </div>
            </div>
          </div>
          <div className={styles.multiple__btn__wrapper}>
            <button
              onClick={() => goBack("nftForm")}
              className={styles.back__btn}
            >
              <span>
                <IoIosArrowBack />
              </span>
              Back
            </button>
            <button onClick={handleNftMint} className={styles.next__btn}>
              Mint NFT
              <span>
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* NFT Mint Modal */}
      <Modal
        className={`${styles.initial__nft__modal} ${styles.nft__form__modal}`}
        show={nftMint}
        onHide={() => setNftMint(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          className={styles.modal__header__wrapper}
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <div className={styles.modal__body__wrapper}>
            <div className={styles.mint__info__wrapper}>
              <div className={styles.mint__image}>
                <img src={formInfo.files} alt={formInfo.title} />
              </div>
              <h1>
                {formInfo.title} <br /> Successfully Minted
              </h1>
              <h6>NFT ID #27283</h6>
            </div>
          </div>
          <div className={styles.multiple__btn__wrapper}>
            <button onClick={openNftDesc} className={styles.next__btn}>
              Open
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CreateNft;
