import {combineReducers} from 'redux'

// -------These reducer files will be created in Reducers folder then will be imported here
import Menu__ToolTip from './menu__tooltip'

// Here all reducers will get combined
export default combineReducers({menu__tooltip: Menu__ToolTip})
