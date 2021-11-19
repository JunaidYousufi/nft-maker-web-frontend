<<<<<<< HEAD
import { combineReducers } from "redux";

// -------These reducer files will be created in Reducers folder then will be imported here
import LoginFormMethod from "./LoginFormMethod";

// Here all reducers will get combined
export default combineReducers({
  LoginFormMethod: LoginFormMethod,
});
=======
import {combineReducers} from 'redux'

// -------These reducer files will be created in Reducers folder then will be imported here
import Menu__ToolTip from './menu__tooltip'
import Home__AllNft from "./home__allnft"
// Here all reducers will get combined
export default combineReducers({menu__tooltip: Menu__ToolTip,home__allnft: Home__AllNft})
>>>>>>> 0b1793f3d9f1977d6cb778f34218a3fb55f55f1c
