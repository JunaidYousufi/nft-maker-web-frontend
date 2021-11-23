import {combineReducers} from 'redux'

// -------These reducer files will be created in Reducers folder then will be imported here
import Menu__ToolTip from './menu__tooltip'
import Home__AllNft from "./home__allnft"
import LoginFormMethod from "./LoginFormMethod";
import CreateNft__Popup from "./createnft__popup";

// Here all reducers will get combined
export default combineReducers({
    menu__tooltip: Menu__ToolTip,
    home__allnft: Home__AllNft,
    LoginFormMethod: LoginFormMethod,
    createnft__popup: CreateNft__Popup,
})
